import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivCardComponent } from './div-card.component';

describe('DivCardComponent', () => {
  let component: DivCardComponent;
  let fixture: ComponentFixture<DivCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DivCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DivCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
