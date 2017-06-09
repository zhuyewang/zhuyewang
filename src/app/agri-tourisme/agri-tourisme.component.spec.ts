import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriTourismeComponent } from './agri-tourisme.component';

describe('AgriTourismeComponent', () => {
  let component: AgriTourismeComponent;
  let fixture: ComponentFixture<AgriTourismeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgriTourismeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgriTourismeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
