import { Component } from '@angular/core';

const data = [
  { name: '1', value: 341 },
  { name: '2', value: 1000 },
];

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class GeneralComponent {
  data: any[] = data;
  view: any[] = [400, 150];

  colorScheme = {
    domain: ['#224185', '#5976B0'],
  };
}
