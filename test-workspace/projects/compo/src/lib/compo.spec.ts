import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compo } from './compo';

describe('Compo', () => {
  let component: Compo;
  let fixture: ComponentFixture<Compo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Compo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Compo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
