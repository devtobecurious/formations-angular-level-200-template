import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvideParentComponent } from './provide-parent.component';

describe('ProvideParentComponent', () => {
  let component: ProvideParentComponent;
  let fixture: ComponentFixture<ProvideParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProvideParentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProvideParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
