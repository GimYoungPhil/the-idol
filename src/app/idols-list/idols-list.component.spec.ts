import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdolsListComponent } from './idols-list.component';

describe('IdolsListComponent', () => {
  let component: IdolsListComponent;
  let fixture: ComponentFixture<IdolsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdolsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdolsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
