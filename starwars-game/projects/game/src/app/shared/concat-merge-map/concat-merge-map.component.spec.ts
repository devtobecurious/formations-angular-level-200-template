import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatMergeMapComponent } from './concat-merge-map.component';

describe('ConcatMergeMapComponent', () => {
  let component: ConcatMergeMapComponent;
  let fixture: ComponentFixture<ConcatMergeMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcatMergeMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcatMergeMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
