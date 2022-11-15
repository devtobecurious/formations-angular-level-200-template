import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAndLabelComponent } from './text-and-label.component';

describe('TextAndLabelComponent', () => {
  let component: TextAndLabelComponent;
  let fixture: ComponentFixture<TextAndLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextAndLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextAndLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
