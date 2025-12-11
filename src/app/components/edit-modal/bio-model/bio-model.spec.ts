import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioModel } from './bio-model';

describe('BioModel', () => {
  let component: BioModel;
  let fixture: ComponentFixture<BioModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BioModel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BioModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
