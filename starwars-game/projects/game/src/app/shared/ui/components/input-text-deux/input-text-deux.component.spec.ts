import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextDeuxComponent } from './input-text-deux.component';

describe('InputTextDeuxComponent', () => {
  let component: InputTextDeuxComponent;
  let fixture: ComponentFixture<InputTextDeuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ InputTextDeuxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputTextDeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
