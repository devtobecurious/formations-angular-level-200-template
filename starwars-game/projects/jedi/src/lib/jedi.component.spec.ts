import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JediComponent } from './jedi.component';

describe('JediComponent', () => {
  let component: JediComponent;
  let fixture: ComponentFixture<JediComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JediComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JediComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
