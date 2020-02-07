import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeFiltersComponent } from './cake-filters.component';

describe('CakeFiltersComponent', () => {
  let component: CakeFiltersComponent;
  let fixture: ComponentFixture<CakeFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakeFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
