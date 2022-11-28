import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaLibTwoComponent } from './ma-lib-two.component';

describe('MaLibTwoComponent', () => {
  let component: MaLibTwoComponent;
  let fixture: ComponentFixture<MaLibTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaLibTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaLibTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
