import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStatComponent } from './list-stat.component';

describe('ListStatComponent', () => {
  let component: ListStatComponent;
  let fixture: ComponentFixture<ListStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
