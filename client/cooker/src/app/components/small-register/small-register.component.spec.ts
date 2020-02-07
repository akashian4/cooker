import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallRegisterComponent } from './small-register.component';

describe('SmallRegisterComponent', () => {
  let component: SmallRegisterComponent;
  let fixture: ComponentFixture<SmallRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
