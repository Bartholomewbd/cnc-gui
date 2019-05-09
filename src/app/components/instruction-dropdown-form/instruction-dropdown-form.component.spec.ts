import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionDropdownFormComponent } from './instruction-dropdown-form.component';

describe('InstructionDropdownFormComponent', () => {
  let component: InstructionDropdownFormComponent;
  let fixture: ComponentFixture<InstructionDropdownFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructionDropdownFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionDropdownFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
