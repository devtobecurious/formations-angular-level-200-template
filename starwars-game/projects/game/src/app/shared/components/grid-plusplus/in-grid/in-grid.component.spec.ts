import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InGridComponent } from './in-grid.component';

describe('InGridComponent', () => {
  let component: InGridComponent;
  let fixture: ComponentFixture<InGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
