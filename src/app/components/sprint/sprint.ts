import { Component, input } from '@angular/core';
import { TicketType } from '../../models/ticket-type';
import { Ticket } from '../../models/ticket';
import { TicketCard } from '../ticket/ticket-card';

@Component({
  selector: 'app-sprint',
  imports: [
    TicketCard
  ],
  templateUrl: './sprint.html',
  styleUrl: './sprint.scss',
})
export class Sprint {
  toDoTickets = input<Ticket[]>([]);
  inProgressTickets = input<Ticket[]>([]);
  doneTickets = input<Ticket[]>([]);
  TicketType = TicketType;
}
