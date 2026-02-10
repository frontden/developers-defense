import { Component, inject, OnInit } from '@angular/core';
import { Team } from '../team/team';
import { Sprint } from '../sprint/sprint';
import { MatButtonModule } from '@angular/material/button';
import { GameStore } from '../../services/game.store';
import { GamePhase } from '../../models/game-phase';

@Component({
	selector: 'app-game',
	imports: [
		Team,
		Sprint,
		MatButtonModule,
	],
	templateUrl: './game-layout.html',
	styleUrl: './game-layout.scss',
})
export class GameLayout implements OnInit {
  GamePhase = GamePhase;
	gameStore = inject(GameStore);
	game = this.gameStore.game;


	ngOnInit() {
		this.gameStore.initGame();
	}

	startNextSprint(): void {
		this.gameStore.startNextSprint();
	}

  stopSprint() {
    this.gameStore.stopSprint();
  }

  resumeSprint() {
    this.gameStore.resumeSprint();
  }

  fasterSprint() {
    this.gameStore.fasterSprint();
  }

  slowSprint() {
    this.gameStore.slowSprint();
  }
}
