import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-idol-card-image',
  template: `<img class="card-img" [src]="url" alt="...">`,
  styles: [`.card-img { object-fit: cover; min-height: 13rem; }`]
})
export class IdolCardImageComponent implements OnInit {
  @Input() url: string;

  constructor() { }

  ngOnInit() {
  }

}
