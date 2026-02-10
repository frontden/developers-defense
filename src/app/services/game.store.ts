import { effect, inject, Injectable, signal } from '@angular/core';
import { Game } from '../models/game';
import { DeveloperType } from '../models/developer-type';
import { DeveloperRank } from '../models/developer-rank';
import { GamePhase } from '../models/game-phase';
import { TickerService } from './ticker.service';
import { SPRINTS } from '../constants/sprints';
import { InitService } from './init.service';

@Injectable({ providedIn: 'root' })
export class GameStore {

	ticker = inject(TickerService);
	initService = inject(InitService);
	private _game = signal<Game | null>(null);

	game = this._game.asReadonly();

	constructor() {
		effect(() => {
			if (this._game()?.phase === GamePhase.sprint) {
				console.log(this.ticker.tick());
				if (this.ticker.tick() === this._game().sprint.duration) {
					this.endSprint();
				}
			}
		})
	}

	initGame() {
		this._game.set(this.initService.initNewGame());
	}

	startNextSprint() {
		this._game.set({
			...this._game(),
			phase: GamePhase.sprint,
		});
		this.ticker.start();
	}

	stopSprint() {
		this.ticker.stop();
	}

	resumeSprint() {
		this.ticker.start();
	}

	fasterSprint() {
		this.ticker.faster();
	}

	slowSprint() {
		this.ticker.slower();
	}

	endSprint() {
		this.ticker.stop();
		this.ticker.reset();
		const nextSprintNumber = this._game().sprintNumber + 1;
		this._game.set({
			...this._game(),
			phase: GamePhase.build,
			sprintNumber: nextSprintNumber,
			sprint: SPRINTS[nextSprintNumber - 1],
		});
	}
}