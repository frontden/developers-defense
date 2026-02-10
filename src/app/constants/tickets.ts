import { Ticket } from '../models/ticket';
import { TicketType } from '../models/ticket-type';
import { TicketStatus } from '../models/ticket-status';

export const EASY_BUG: Ticket = {
	type: TicketType.bug,
	status: TicketStatus.todo,
	storyPoints: 1,
	pointsDone: 0,
	appearTime: 0,
	canReproduceBug: false,
}

export const EASY_FEATURE: Ticket = {
	type: TicketType.feature,
	status: TicketStatus.todo,
	storyPoints: 2,
	pointsDone: 0,
	appearTime: 0,
	canReproduceBug: true,
}



