import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowEnfantComponent } from './row-enfant.component';

describe('RowEnfantComponent', () => {
  let component: RowEnfantComponent;
  let fixture: ComponentFixture<RowEnfantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowEnfantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
