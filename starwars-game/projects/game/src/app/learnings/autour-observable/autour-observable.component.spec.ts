import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutourObservableComponent } from './autour-observable.component';

describe('AutourObservableComponent', () => {
  let component: AutourObservableComponent;
  let fixture: ComponentFixture<AutourObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AutourObservableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutourObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
