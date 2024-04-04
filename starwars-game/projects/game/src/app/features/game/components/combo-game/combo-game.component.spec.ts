import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboGameComponent } from './combo-game.component';

describe('ComboGameComponent', () => {
  let component: ComboGameComponent;
  let fixture: ComponentFixture<ComboGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComboGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComboGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
