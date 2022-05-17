import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicksComponent } from './ticks.component';

describe('TicksComponent', () => {
  let component: TicksComponent;
  let fixture: ComponentFixture<TicksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
