import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultWeatherComponent } from './result-weather.component';

describe('ResultWeatherComponent', () => {
  let component: ResultWeatherComponent;
  let fixture: ComponentFixture<ResultWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultWeatherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
