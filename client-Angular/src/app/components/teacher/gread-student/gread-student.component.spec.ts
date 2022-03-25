import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreadStudentComponent } from './gread-student.component';

describe('GreadStudentComponent', () => {
  let component: GreadStudentComponent;
  let fixture: ComponentFixture<GreadStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreadStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreadStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
