import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogExistIDComponent } from './dialog-exist-id.component';

describe('DialogExistIDComponent', () => {
  let component: DialogExistIDComponent;
  let fixture: ComponentFixture<DialogExistIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogExistIDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogExistIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
