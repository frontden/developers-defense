import { Component, computed, input } from '@angular/core';
import { TicketType } from '../../models/ticket-type';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { LucideAngularModule, Bug, Rocket, Dock } from 'lucide-angular';

@Component({
	selector: 'app-ticket',
	imports: [CommonModule, MatIconModule, LucideAngularModule],
	templateUrl: './ticket.html',
	styleUrl: './ticket.scss',
})
export class Ticket {
  TicketType = TicketType;
	type = input<TicketType>(TicketType.bug);
	icon = computed(() => {
		switch (this.type()) {
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
