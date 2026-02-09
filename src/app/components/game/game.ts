import { Component, signal } from '@angular/core';
import { Team } from '../team/team';
import { Sprint } from '../sprint/sprint';
import { Developer } from '../../models/developer';
import { DeveloperType } from '../../models/developer-type';
import { DeveloperRank } from '../../models/developer-rank';

@Component({
  selector: 'app-game',
    imports: [
        Team,
        Sprint
    ],
  templateUrl: './game.html',
  styleUrl: './game.scss',
})
export class Game {
    developers = signal<Developer[]>([
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
    ]);
}
