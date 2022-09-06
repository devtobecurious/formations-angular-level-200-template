import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldBisComponent } from './form-field-bis.component';

describe('FormFieldBisComponent', () => {
  let component: FormFieldBisComponent;
  let fixture: ComponentFixture<FormFieldBisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormFieldBisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormFieldBisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
