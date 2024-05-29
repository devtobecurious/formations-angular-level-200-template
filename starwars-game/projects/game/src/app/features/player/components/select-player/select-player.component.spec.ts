import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPlayerComponent } from './select-player.component';

describe('SelectPlayerComponent', () => {
  let component: SelectPlayerComponent;
  let fixture: ComponentFixture<SelectPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectPlayerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
