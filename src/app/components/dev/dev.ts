import { Component, input } from '@angular/core';
import { Developer } from '../../models/developer';

@Component({
  selector: 'app-dev',
  imports: [],
  templateUrl: './dev.html',
  styleUrl: './dev.scss',
})
export class Dev {
    developer = input<Developer>();
}
