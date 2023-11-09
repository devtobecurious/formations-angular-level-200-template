import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RappelsObsVsPromiseComponent } from './rappels-obs-vs-promise.component';

describe('RappelsObsVsPromiseComponent', () => {
  let component: RappelsObsVsPromiseComponent;
  let fixture: ComponentFixture<RappelsObsVsPromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RappelsObsVsPromiseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RappelsObsVsPromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
