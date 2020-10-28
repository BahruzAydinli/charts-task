import { Component } from '@angular/core';

const types = [
  { name: 'Son tarix ilə', value: 600 },
  { name: 'Son tarixsiz', value: 350 },
  { name: 'Davamlı', value: 50 },
];

@Component({
  selector: 'app-task-types',
  templateUrl: './task-types.component.html',
  styleUrls: ['./task-types.component.scss'],
})
export class TaskTypesComponent {
  types: any[] = types;
  view: any[] = [500, 300];
  colorScheme = { domain: ['#5976B0'] };
}
