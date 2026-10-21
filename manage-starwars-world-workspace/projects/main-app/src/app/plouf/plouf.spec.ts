import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Plouf } from './plouf';

describe('Plouf', () => {
  let component: Plouf;
  let fixture: ComponentFixture<Plouf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Plouf],
    }).compileComponents();

    fixture = TestBed.createComponent(Plouf);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
