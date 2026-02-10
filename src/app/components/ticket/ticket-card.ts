import { Component, computed, input } from '@angular/core';
import { TicketType } from '../../models/ticket-type';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { LucideAngularModule, Bug, Rocket, Dock } from 'lucide-angular';
import { Ticket } from '../../models/ticket';

@Component({
	selector: 'app-ticket',
	imports: [CommonModule, MatIconModule, LucideAngularModule],
	templateUrl: './ticket-card.html',
	styleUrl: './ticket-card.scss',
})
export class TicketCard {
  TicketType = TicketType;
	ticket = input<Ticket>();
	icon = computed(() => {
		switch (this.ticket()?.type) {
			case TicketType.bug:
				return Bug;
			case TicketType.feature:
				return Rocket;
			case TicketType.deployment:
				return Dock;
			default:
				return Bug;
		}
	});
}
