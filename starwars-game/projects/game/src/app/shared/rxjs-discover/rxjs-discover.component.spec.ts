import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsDiscoverComponent } from './rxjs-discover.component';

describe('RxjsDiscoverComponent', () => {
  let component: RxjsDiscoverComponent;
  let fixture: ComponentFixture<RxjsDiscoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsDiscoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsDiscoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
