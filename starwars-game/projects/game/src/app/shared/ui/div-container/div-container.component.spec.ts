import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivContainerComponent } from './div-container.component';

describe('DivContainerComponent', () => {
  let component: DivContainerComponent;
  let fixture: ComponentFixture<DivContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DivContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
