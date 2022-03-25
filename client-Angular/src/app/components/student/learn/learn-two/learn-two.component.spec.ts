import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnTwoComponent } from './learn-two.component';

describe('LearnTwoComponent', () => {
  let component: LearnTwoComponent;
  let fixture: ComponentFixture<LearnTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
