import { Component, OnInit, Input } from '@angular/core';

import { Idol } from '../idol.model';

@Component({
  selector: 'app-idol-card-infomation',
  template: `
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  `,
})
export class IdolCardInfomationComponent implements OnInit {
  @Input() idol: Idol;

  constructor() { }

  ngOnInit() {
  }

}
