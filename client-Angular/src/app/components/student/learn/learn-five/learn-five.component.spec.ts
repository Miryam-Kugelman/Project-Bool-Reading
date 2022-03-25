import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnFiveComponent } from './learn-five.component';

describe('LearnFiveComponent', () => {
  let component: LearnFiveComponent;
  let fixture: ComponentFixture<LearnFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnFiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
