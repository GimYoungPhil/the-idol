import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Idol } from '../idol.model';

@Component({
  selector: 'app-idols-list',
  templateUrl: './idols-list.component.html',
  styleUrls: ['./idols-list.component.css']
})
export class IdolsListComponent implements OnInit {
  @Input() idols: Idol[];
  @Output() onIdolSelected: EventEmitter<Idol>;
  private currentIdol: Idol;

  constructor() {
    this.onIdolSelected = new EventEmitter();
  }

  ngOnInit() {
  }

  clicked(idol: Idol): void {
    this.currentIdol = idol;
    this.onIdolSelected.emit(idol);
  }

  isSelected(idol: Idol): boolean {
    if (!idol || !this.currentIdol) {
      return false;
    }
    return idol.name === this.currentIdol.name;
  }

}
