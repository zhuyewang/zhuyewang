import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLogoComponent } from './app-logo.component';

describe('AppLogoComponent', () => {
  let component: AppLogoComponent;
  let fixture: ComponentFixture<AppLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
