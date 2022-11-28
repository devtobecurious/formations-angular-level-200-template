import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelComboboxComponent } from './label-combobox.component';

describe('LabelComboboxComponent', () => {
  let component: LabelComboboxComponent;
  let fixture: ComponentFixture<LabelComboboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LabelComboboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelComboboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
