import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalDiscover } from './signal-discover';

describe('SignalDiscover', () => {
  let component: SignalDiscover;
  let fixture: ComponentFixture<SignalDiscover>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalDiscover]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalDiscover);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
