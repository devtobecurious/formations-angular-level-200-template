import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverObsComponent } from './discover-obs.component';

describe('DiscoverObsComponent', () => {
  let component: DiscoverObsComponent;
  let fixture: ComponentFixture<DiscoverObsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DiscoverObsComponent]
    });
    fixture = TestBed.createComponent(DiscoverObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
