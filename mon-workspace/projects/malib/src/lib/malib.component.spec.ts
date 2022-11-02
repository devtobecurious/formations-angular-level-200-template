import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MalibComponent } from './malib.component';

describe('MalibComponent', () => {
  let component: MalibComponent;
  let fixture: ComponentFixture<MalibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MalibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MalibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
