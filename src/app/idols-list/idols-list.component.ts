import { Component, OnInit, Input } from '@angular/core';

import { Idol } from '../idol.model';

@Component({
  selector: 'app-idols-list',
  templateUrl: './idols-list.component.html',
  styleUrls: ['./idols-list.component.css']
})
export class IdolsListComponent implements OnInit {
  @Input() idols: Idol[];

  constructor() { }

  ngOnInit() {
  }

}
