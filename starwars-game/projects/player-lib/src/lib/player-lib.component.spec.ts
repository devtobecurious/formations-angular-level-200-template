import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerLibComponent } from './player-lib.component';

describe('PlayerLibComponent', () => {
  let component: PlayerLibComponent;
  let fixture: ComponentFixture<PlayerLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
