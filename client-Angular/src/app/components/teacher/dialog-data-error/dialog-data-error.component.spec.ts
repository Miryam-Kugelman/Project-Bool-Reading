import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDataErrorComponent } from './dialog-data-error.component';

describe('DialogDataErrorComponent', () => {
  let component: DialogDataErrorComponent;
  let fixture: ComponentFixture<DialogDataErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDataErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDataErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
