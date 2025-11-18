import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditModal } from './edit-modal';

describe('EditModal', () => {
  let component: EditModal;
  let fixture: ComponentFixture<EditModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
