import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-idol-card-company',
  template: `<p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>`,
})
export class IdolCardCompanyComponent implements OnInit {
  @Input() companies: string[];

  constructor() { }

  ngOnInit() {
  }

}
