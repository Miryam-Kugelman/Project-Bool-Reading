import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnSixComponent } from './learn-six.component';

describe('LearnSixComponent', () => {
  let component: LearnSixComponent;
  let fixture: ComponentFixture<LearnSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnSixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
