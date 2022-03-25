import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogStudentNotExistComponent } from './dialog-student-not-exist.component';

describe('DialogStudentNotExistComponent', () => {
  let component: DialogStudentNotExistComponent;
  let fixture: ComponentFixture<DialogStudentNotExistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogStudentNotExistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogStudentNotExistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
