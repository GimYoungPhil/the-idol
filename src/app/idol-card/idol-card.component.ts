import { Component, OnInit, HostBinding, Input } from '@angular/core';

import { Idol } from '../idol.model';

@Component({
  selector: 'app-idol-card',
  templateUrl: './idol-card.component.html',
  styleUrls: ['./idol-card.component.css']
})
export class IdolCardComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'col-12 col-lg-6';
  @Input() idol: Idol;
  @Input() selected: boolean;

  constructor() { }

  ngOnInit() {
  }

}
