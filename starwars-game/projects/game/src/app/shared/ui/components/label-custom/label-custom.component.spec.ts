import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelCustomComponent } from './label-custom.component';

describe('LabelCustomComponent', () => {
  let component: LabelCustomComponent;
  let fixture: ComponentFixture<LabelCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LabelCustomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
