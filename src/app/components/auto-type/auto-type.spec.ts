import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoType } from './auto-type';

describe('AutoType', () => {
  let component: AutoType;
  let fixture: ComponentFixture<AutoType>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AutoType]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoType);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
