import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewOneComponent } from './new-one.component';

describe('NewOneComponent', () => {
  let component: NewOneComponent;
  let fixture: ComponentFixture<NewOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
