import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonTextBoxComponent } from './mon-text-box.component';

describe('MonTextBoxComponent', () => {
  let component: MonTextBoxComponent;
  let fixture: ComponentFixture<MonTextBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonTextBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonTextBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
