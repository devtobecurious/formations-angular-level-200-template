import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourComponent } from './four.component';

describe('FourComponent', () => {
  let component: FourComponent;
  let fixture: ComponentFixture<FourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FourComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
