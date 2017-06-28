import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GardenStuffComponent } from './garden-stuff.component';

describe('GardenStuffComponent', () => {
  let component: GardenStuffComponent;
  let fixture: ComponentFixture<GardenStuffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GardenStuffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GardenStuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
