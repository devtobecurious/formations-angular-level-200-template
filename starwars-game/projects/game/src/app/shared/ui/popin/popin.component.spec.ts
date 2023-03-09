import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopinComponent } from './popin.component';

describe('PopinComponent', () => {
  let component: PopinComponent;
  let fixture: ComponentFixture<PopinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PopinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
