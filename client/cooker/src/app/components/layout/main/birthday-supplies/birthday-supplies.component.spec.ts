import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdaySuppliesComponent } from './birthday-supplies.component';

describe('BirthdaySuppliesComponent', () => {
  let component: BirthdaySuppliesComponent;
  let fixture: ComponentFixture<BirthdaySuppliesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthdaySuppliesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BirthdaySuppliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
