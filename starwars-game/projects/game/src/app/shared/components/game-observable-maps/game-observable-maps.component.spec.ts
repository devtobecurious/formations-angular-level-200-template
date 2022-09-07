import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameObservableMapsComponent } from './game-observable-maps.component';

describe('GameObservableMapsComponent', () => {
  let component: GameObservableMapsComponent;
  let fixture: ComponentFixture<GameObservableMapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameObservableMapsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameObservableMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
