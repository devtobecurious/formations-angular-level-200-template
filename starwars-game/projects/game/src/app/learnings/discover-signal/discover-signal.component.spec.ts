import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverSignalComponent } from './discover-signal.component';

describe('DiscoverSignalComponent', () => {
  let component: DiscoverSignalComponent;
  let fixture: ComponentFixture<DiscoverSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscoverSignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscoverSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
