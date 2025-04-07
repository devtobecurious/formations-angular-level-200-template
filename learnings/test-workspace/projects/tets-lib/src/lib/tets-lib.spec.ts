import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TetsLib } from './tets-lib';

describe('TetsLib', () => {
  let component: TetsLib;
  let fixture: ComponentFixture<TetsLib>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TetsLib]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TetsLib);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
