import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-idol-card-company',
  template: `<p class="card-text"><small class="text-muted">{{ companies[0] }} \> {{ companies[1] }} </small></p>`,
})
export class IdolCardCompanyComponent implements OnInit {
  @Input() companies: string[];

  constructor() { }

  ngOnInit() {
  }

}
