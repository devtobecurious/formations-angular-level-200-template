import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheGameLibComponent } from './the-game-lib.component';

describe('TheGameLibComponent', () => {
  let component: TheGameLibComponent;
  let fixture: ComponentFixture<TheGameLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheGameLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheGameLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
