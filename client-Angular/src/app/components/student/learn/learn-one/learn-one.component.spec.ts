import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnOneComponent } from './learn-one.component';

describe('LearnOneComponent', () => {
  let component: LearnOneComponent;
  let fixture: ComponentFixture<LearnOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
