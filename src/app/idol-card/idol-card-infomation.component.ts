import { Component, OnInit, Input } from '@angular/core';

import { Idol } from '../idol.model';

@Component({
  selector: 'app-idol-card-infomation',
  template: `
    <h5 class="card-title mb-0">{{ idol.name }}</h5>
    <p class="card-text mb-0">{{ idol.birth }}</p>
    <p class="card-text mb-0">{{ idol.height }} cm</p>
    <p class="card-text mb-0" *ngIf="idol.weight">{{ idol.weight }} kg</p>
  `,
})
export class IdolCardInfomationComponent implements OnInit {
  @Input() idol: Idol;

  constructor() { }

  ngOnInit() {
  }

}
