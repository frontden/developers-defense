import { Component } from '@angular/core';
import { Ticket } from '../ticket/ticket';
import { TicketType } from '../../models/ticket-type';

@Component({
  selector: 'app-sprint',
  imports: [
    Ticket
  ],
  templateUrl: './sprint.html',
  styleUrl: './sprint.scss',
})
export class Sprint {
  TicketType = TicketType;
}
