import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnCompPushComponent } from './un-comp-push.component';

describe('UnCompPushComponent', () => {
  let component: UnCompPushComponent;
  let fixture: ComponentFixture<UnCompPushComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnCompPushComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnCompPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
