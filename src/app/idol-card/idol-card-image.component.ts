import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-idol-card-image',
  template: `<img class="card-img" [src]="url" alt="..." *ngIf="url">`,
  styleUrls: ['./idol-card-image.component.css']
})
export class IdolCardImageComponent implements OnInit {
  @Input() url: string;

  constructor() { }

  ngOnInit() {
  }

}
