import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowCustomComponent } from './row-custom.component';

describe('RowCustomComponent', () => {
  let component: RowCustomComponent;
  let fixture: ComponentFixture<RowCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowCustomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RowCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
