import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WookieListComponent } from './wookie-list.component';

describe('WookieListComponent', () => {
  let component: WookieListComponent;
  let fixture: ComponentFixture<WookieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ WookieListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WookieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
