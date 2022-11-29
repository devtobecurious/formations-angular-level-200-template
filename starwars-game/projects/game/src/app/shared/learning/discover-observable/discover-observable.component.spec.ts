import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverObservableComponent } from './discover-observable.component';

describe('DiscoverObservableComponent', () => {
  let component: DiscoverObservableComponent;
  let fixture: ComponentFixture<DiscoverObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoverObservableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscoverObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
