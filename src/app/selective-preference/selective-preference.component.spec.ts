import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectivePreferenceComponent } from './selective-preference.component';

describe('SelectivePreferenceComponent', () => {
  let component: SelectivePreferenceComponent;
  let fixture: ComponentFixture<SelectivePreferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectivePreferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectivePreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
