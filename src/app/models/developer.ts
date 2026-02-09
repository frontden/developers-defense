import { DeveloperType } from './developer-type';
import { DeveloperRank } from './developer-rank';

export interface Developer {
    name: string;
    type: DeveloperType;
    rank: DeveloperRank;
    // story points / day
    productivity: number;
    // then an end story have a chance to make a bug, in twice lower if end bug
    bugChance: number;
    // bigger = better, if reached = inactive to the end of sprint
    burnout: number;
    overtimeChance: number;
    overtimeAmount: number;
}