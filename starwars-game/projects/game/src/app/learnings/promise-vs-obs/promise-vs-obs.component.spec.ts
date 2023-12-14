import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiseVsObsComponent } from './promise-vs-obs.component';

describe('PromiseVsObsComponent', () => {
  let component: PromiseVsObsComponent;
  let fixture: ComponentFixture<PromiseVsObsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PromiseVsObsComponent]
    });
    fixture = TestBed.createComponent(PromiseVsObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
