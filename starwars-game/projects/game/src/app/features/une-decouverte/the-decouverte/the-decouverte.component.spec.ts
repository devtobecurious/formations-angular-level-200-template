import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheDecouverteComponent } from './the-decouverte.component';

describe('TheDecouverteComponent', () => {
  let component: TheDecouverteComponent;
  let fixture: ComponentFixture<TheDecouverteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheDecouverteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheDecouverteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
