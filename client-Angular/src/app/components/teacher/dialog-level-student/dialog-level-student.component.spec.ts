import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogLevelStudentComponent } from './dialog-level-student.component';

describe('DialogLevelStudentComponent', () => {
  let component: DialogLevelStudentComponent;
  let fixture: ComponentFixture<DialogLevelStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogLevelStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogLevelStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
