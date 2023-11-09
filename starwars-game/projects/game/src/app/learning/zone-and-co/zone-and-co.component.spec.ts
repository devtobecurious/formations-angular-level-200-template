import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneAndCoComponent } from './zone-and-co.component';

describe('ZoneAndCoComponent', () => {
  let component: ZoneAndCoComponent;
  let fixture: ComponentFixture<ZoneAndCoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZoneAndCoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZoneAndCoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
