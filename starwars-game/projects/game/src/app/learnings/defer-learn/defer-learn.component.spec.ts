import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferLearnComponent } from './defer-learn.component';

describe('DeferLearnComponent', () => {
  let component: DeferLearnComponent;
  let fixture: ComponentFixture<DeferLearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferLearnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeferLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
