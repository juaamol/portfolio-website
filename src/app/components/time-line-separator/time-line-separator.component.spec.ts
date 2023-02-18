import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLineSeparatorComponent } from './time-line-separator.component';

describe('TimeLineSeparatorComponent', () => {
  let component: TimeLineSeparatorComponent;
  let fixture: ComponentFixture<TimeLineSeparatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeLineSeparatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeLineSeparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
