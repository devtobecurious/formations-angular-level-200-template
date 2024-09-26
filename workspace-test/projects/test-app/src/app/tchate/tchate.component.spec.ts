import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TchateComponent } from './tchate.component';

describe('TchateComponent', () => {
  let component: TchateComponent;
  let fixture: ComponentFixture<TchateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TchateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TchateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
