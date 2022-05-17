import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarSearchComponent } from './topbar-search.component';

describe('TopbarSearchComponent', () => {
  let component: TopbarSearchComponent;
  let fixture: ComponentFixture<TopbarSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopbarSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
