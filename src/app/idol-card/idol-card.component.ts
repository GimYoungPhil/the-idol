import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-idol-card',
  templateUrl: './idol-card.component.html',
  styleUrls: ['./idol-card.component.css']
})
export class IdolCardComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'col-12 col-lg-6';

  constructor() { }

  ngOnInit() {
  }

}
