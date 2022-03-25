import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogGreadStudentComponent } from './dialog-gread-student.component';

describe('DialogGreadStudentComponent', () => {
  let component: DialogGreadStudentComponent;
  let fixture: ComponentFixture<DialogGreadStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogGreadStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogGreadStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
