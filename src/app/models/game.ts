import { Developer } from './developer';
import { Company } from './company';
import { GamePhase } from './game-phase';
import { Sprint } from './sprint';

export interface Game {
    company: Company;
    sprintNumber: number;
    sprint: Sprint;
    developers: Developer[];
    phase: GamePhase;
}