import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfantComponent } from './enfant.component';

describe('EnfantComponent', () => {
  let component: EnfantComponent;
  let fixture: ComponentFixture<EnfantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnfantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
