import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnFourComponent } from './learn-four.component';

describe('LearnFourComponent', () => {
  let component: LearnFourComponent;
  let fixture: ComponentFixture<LearnFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
