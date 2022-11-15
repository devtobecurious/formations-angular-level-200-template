import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComboBoxComponent } from './my-combo-box.component';

describe('MyComboBoxComponent', () => {
  let component: MyComboBoxComponent;
  let fixture: ComponentFixture<MyComboBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MyComboBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyComboBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
