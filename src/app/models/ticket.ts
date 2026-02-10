import { TicketType } from './ticket-type';
import { Developer } from './developer';
import { TicketStatus } from './ticket-status';

export interface Ticket {
	type: TicketType;
	status: TicketStatus;
	storyPoints: number;
	pointsDone: number;
	appearTime: number;
	canReproduceBug: boolean;
	worker?: Developer;
}