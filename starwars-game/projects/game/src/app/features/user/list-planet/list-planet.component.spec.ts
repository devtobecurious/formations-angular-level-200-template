import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlanetComponent } from './list-planet.component';

describe('ListPlanetComponent', () => {
  let component: ListPlanetComponent;
  let fixture: ComponentFixture<ListPlanetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ListPlanetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
