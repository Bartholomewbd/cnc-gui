import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetMaterialDimensionsComponent } from './set-material-dimensions.component';

describe('SetMaterialDimensionsComponent', () => {
  let component: SetMaterialDimensionsComponent;
  let fixture: ComponentFixture<SetMaterialDimensionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetMaterialDimensionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetMaterialDimensionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
