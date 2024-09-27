import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboGamesComponent } from './combo-games.component';

describe('ComboGamesComponent', () => {
  let component: ComboGamesComponent;
  let fixture: ComponentFixture<ComboGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComboGamesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComboGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
