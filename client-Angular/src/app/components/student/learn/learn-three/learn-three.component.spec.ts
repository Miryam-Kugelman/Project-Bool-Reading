import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnThreeComponent } from './learn-three.component';

describe('LearnThreeComponent', () => {
  let component: LearnThreeComponent;
  let fixture: ComponentFixture<LearnThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
