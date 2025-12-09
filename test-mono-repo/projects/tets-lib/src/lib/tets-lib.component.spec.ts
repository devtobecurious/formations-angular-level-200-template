import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TetsLibComponent } from './tets-lib.component';

describe('TetsLibComponent', () => {
  let component: TetsLibComponent;
  let fixture: ComponentFixture<TetsLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TetsLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TetsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
