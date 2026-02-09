import { Component, input } from '@angular/core';
import { Developer } from '../../models/developer';
import { Dev } from '../dev/dev';

@Component({
    selector: 'app-team',
    imports: [
        Dev
    ],
    templateUrl: './team.html',
    styleUrl: './team.scss',
})
export class Team {
    developers = input<Developer[]>();
}
