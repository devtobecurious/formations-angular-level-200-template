import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FivComponent } from './fiv.component';

describe('FivComponent', () => {
  let component: FivComponent;
  let fixture: ComponentFixture<FivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FivComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
