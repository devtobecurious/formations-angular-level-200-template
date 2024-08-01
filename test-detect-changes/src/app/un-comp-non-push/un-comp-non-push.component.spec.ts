import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnCompNonPushComponent } from './un-comp-non-push.component';

describe('UnCompNonPushComponent', () => {
  let component: UnCompNonPushComponent;
  let fixture: ComponentFixture<UnCompNonPushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnCompNonPushComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnCompNonPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
