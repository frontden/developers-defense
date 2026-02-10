import { Ticket } from './ticket';

export interface Sprint {
    order: number;
    duration: number;
    toDoTickets: Ticket[];
    inProgressTickets: Ticket[];
    doneTickets: Ticket[];
}