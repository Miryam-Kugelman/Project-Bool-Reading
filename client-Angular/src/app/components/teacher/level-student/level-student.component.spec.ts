import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelStudentComponent } from './level-student.component';

describe('LevelStudentComponent', () => {
  let component: LevelStudentComponent;
  let fixture: ComponentFixture<LevelStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
