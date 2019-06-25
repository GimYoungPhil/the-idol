import { Component } from '@angular/core';

import { Idol } from './idol.model';
import { idols as data } from '../api/idols.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  idols: Idol[];

  constructor() {
    this.idols = data.map((i: Idol) => new Idol(i.name, i.group, i.company, i.birth, i.height, i.weight, i.imageUrl));
  }
}
