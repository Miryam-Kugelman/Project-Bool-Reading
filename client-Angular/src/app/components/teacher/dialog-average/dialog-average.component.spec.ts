import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAverageComponent } from './dialog-average.component';

describe('DialogAverageComponent', () => {
  let component: DialogAverageComponent;
  let fixture: ComponentFixture<DialogAverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAverageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
