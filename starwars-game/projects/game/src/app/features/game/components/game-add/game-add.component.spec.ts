import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameAddComponent } from './game-add.component';

describe('GameAddComponent', () => {
  let component: GameAddComponent;
  let fixture: ComponentFixture<GameAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
