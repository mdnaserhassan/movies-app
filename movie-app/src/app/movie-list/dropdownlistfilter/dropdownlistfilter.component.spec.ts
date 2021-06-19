import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownlistfilterComponent } from './dropdownlistfilter.component';

describe('DropdownlistfilterComponent', () => {
  let component: DropdownlistfilterComponent;
  let fixture: ComponentFixture<DropdownlistfilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownlistfilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownlistfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
