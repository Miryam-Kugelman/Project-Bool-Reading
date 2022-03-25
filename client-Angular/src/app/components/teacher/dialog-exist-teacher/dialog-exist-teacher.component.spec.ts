import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogExistTeacherComponent } from './dialog-exist-teacher.component';

describe('DialogExistTeacherComponent', () => {
  let component: DialogExistTeacherComponent;
  let fixture: ComponentFixture<DialogExistTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogExistTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogExistTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
