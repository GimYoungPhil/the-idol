import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-idol-card-image',
  template: `<img [src]="url" class="card-img" alt="...">`,
})
export class IdolCardImageComponent implements OnInit {
  @Input() url: string;

  constructor() { }

  ngOnInit() {
  }

}
