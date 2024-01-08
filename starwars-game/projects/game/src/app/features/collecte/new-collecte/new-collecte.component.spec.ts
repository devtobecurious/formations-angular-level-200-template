import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCollecteComponent } from './new-collecte.component';

describe('NewCollecteComponent', () => {
  let component: NewCollecteComponent;
  let fixture: ComponentFixture<NewCollecteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCollecteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewCollecteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
