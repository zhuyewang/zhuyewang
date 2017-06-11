import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformSupportComponent } from './platform-support.component';

describe('PlatformSupportComponent', () => {
  let component: PlatformSupportComponent;
  let fixture: ComponentFixture<PlatformSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatformSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
