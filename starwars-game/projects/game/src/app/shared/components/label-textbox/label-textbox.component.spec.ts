import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelTextboxComponent } from './label-textbox.component';

describe('LabelTextboxComponent', () => {
  let component: LabelTextboxComponent;
  let fixture: ComponentFixture<LabelTextboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelTextboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelTextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
