import { Injectable, signal, effect } from '@angular/core';
import { Game } from '../models/game';
import { GamePhase } from '../models/game-phase';
import { SPRINTS } from '../constants/sprints';
import { DeveloperType } from '../models/developer-type';
import { DeveloperRank } from '../models/developer-rank';
import { Developer } from '../models/developer';

@Injectable({ providedIn: 'root' })
export class InitService {
	initNewGame(): Game {
		return {
			phase: GamePhase.build,
			company: {
				reputation: 5,
				budget: 100,
			},
			sprintNumber: 1,
			sprint: SPRINTS[0],
			developers: this.initStartingDevelopers(),
		};
	}

	initStartingDevelopers(): Developer[] {
		return [
			{
				name: 'Mike',
				type: DeveloperType.front,
				rank: DeveloperRank.junior,
				productivity: 1,
				bugChance: 70,
				burnout: 3,
				overtimeChance: 5,
				overtimeAmount: 1,
			},
			{
				name: 'Den',
				type: DeveloperType.fullStack,
				rank: DeveloperRank.senior,
				productivity: 8,
				bugChance: 10,
				burnout: 7,
				overtimeChance: 20,
				overtimeAmount: 4,
			},
		];
	}
}