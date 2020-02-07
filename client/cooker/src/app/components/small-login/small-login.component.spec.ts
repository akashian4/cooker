import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallLoginComponent } from './small-login.component';

describe('SmallLoginComponent', () => {
  let component: SmallLoginComponent;
  let fixture: ComponentFixture<SmallLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
