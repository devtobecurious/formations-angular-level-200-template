import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CombobocLabelComponent } from './comboboc-label.component';

describe('CombobocLabelComponent', () => {
  let component: CombobocLabelComponent;
  let fixture: ComponentFixture<CombobocLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CombobocLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CombobocLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
