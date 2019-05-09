import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetCutLocationComponent } from './set-cut-location.component';

describe('SetCutLocationComponent', () => {
  let component: SetCutLocationComponent;
  let fixture: ComponentFixture<SetCutLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetCutLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetCutLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
