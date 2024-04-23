import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiseVsObservableComponent } from './promise-vs-observable.component';

describe('PromiseVsObservableComponent', () => {
  let component: PromiseVsObservableComponent;
  let fixture: ComponentFixture<PromiseVsObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromiseVsObservableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PromiseVsObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
