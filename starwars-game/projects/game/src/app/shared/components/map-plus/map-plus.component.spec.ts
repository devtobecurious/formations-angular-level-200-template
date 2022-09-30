import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapPlusComponent } from './map-plus.component';

describe('MapPlusComponent', () => {
  let component: MapPlusComponent;
  let fixture: ComponentFixture<MapPlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MapPlusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
