import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfantAvecTitreComponent } from './enfant-avec-titre.component';

describe('EnfantAvecTitreComponent', () => {
  let component: EnfantAvecTitreComponent;
  let fixture: ComponentFixture<EnfantAvecTitreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnfantAvecTitreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnfantAvecTitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
