import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixComponent } from './six.component';

describe('SixComponent', () => {
  let component: SixComponent;
  let fixture: ComponentFixture<SixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SixComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
