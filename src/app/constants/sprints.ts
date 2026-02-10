import { Sprint } from '../models/sprint';
import { EASY_BUG, EASY_FEATURE } from './tickets';

export const SPRINTS: Sprint[] = [
	{
		order: 1,
		duration: 50,
		toDoTickets: [EASY_BUG, EASY_BUG, EASY_BUG],
		inProgressTickets: [],
		doneTickets: [],
	},
	{
		order: 1,
		duration: 100,
		toDoTickets: [EASY_FEATURE, EASY_FEATURE, EASY_BUG, EASY_BUG],
		inProgressTickets: [],
		doneTickets: [],
	}
];



