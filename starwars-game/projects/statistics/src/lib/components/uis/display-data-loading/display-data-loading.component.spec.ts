import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDataLoadingComponent } from './display-data-loading.component';

describe('DisplayDataLoadingComponent', () => {
  let component: DisplayDataLoadingComponent;
  let fixture: ComponentFixture<DisplayDataLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayDataLoadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayDataLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
