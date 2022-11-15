import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaLibComponent } from './ma-lib.component';

describe('MaLibComponent', () => {
  let component: MaLibComponent;
  let fixture: ComponentFixture<MaLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
