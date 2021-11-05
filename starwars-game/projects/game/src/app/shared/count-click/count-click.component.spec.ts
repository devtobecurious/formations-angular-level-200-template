import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountClickComponent } from './count-click.component';

describe('CountClickComponent', () => {
  let component: CountClickComponent;
  let fixture: ComponentFixture<CountClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountClickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
