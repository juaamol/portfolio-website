import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetadataCardsDisplayerComponent } from './metadata-cards-displayer.component';

describe('MetadataCardsDisplayerComponent', () => {
  let component: MetadataCardsDisplayerComponent;
  let fixture: ComponentFixture<MetadataCardsDisplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetadataCardsDisplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetadataCardsDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
