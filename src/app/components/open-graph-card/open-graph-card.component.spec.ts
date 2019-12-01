import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenGraphCardComponent } from './open-graph-card.component';

describe('OpenGraphCardComponent', () => {
  let component: OpenGraphCardComponent;
  let fixture: ComponentFixture<OpenGraphCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenGraphCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenGraphCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
