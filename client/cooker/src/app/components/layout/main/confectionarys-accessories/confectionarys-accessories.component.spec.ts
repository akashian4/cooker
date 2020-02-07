import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfectionarysAccessoriesComponent } from './confectionarys-accessories.component';

describe('ConfectionarysAccessoriesComponent', () => {
  let component: ConfectionarysAccessoriesComponent;
  let fixture: ComponentFixture<ConfectionarysAccessoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfectionarysAccessoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfectionarysAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
