import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameRowComponent } from './game-row.component';

describe('GameRowComponent', () => {
  let component: GameRowComponent;
  let fixture: ComponentFixture<GameRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
