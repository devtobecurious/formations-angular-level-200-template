import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsPipeAsyncComponent } from './rxjs-pipe-async.component';

describe('RxjsPipeAsyncComponent', () => {
  let component: RxjsPipeAsyncComponent;
  let fixture: ComponentFixture<RxjsPipeAsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsPipeAsyncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsPipeAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
