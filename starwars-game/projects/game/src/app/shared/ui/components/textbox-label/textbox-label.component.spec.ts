import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextboxLabelComponent } from './textbox-label.component';

describe('TextboxLabelComponent', () => {
  let component: TextboxLabelComponent;
  let fixture: ComponentFixture<TextboxLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TextboxLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextboxLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
