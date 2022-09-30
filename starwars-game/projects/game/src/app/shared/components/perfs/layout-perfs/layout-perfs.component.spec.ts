import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutPerfsComponent } from './layout-perfs.component';

describe('LayoutPerfsComponent', () => {
  let component: LayoutPerfsComponent;
  let fixture: ComponentFixture<LayoutPerfsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutPerfsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutPerfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
