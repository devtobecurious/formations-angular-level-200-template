import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverMarkForCheckComponent } from './discover-mark-for-check.component';

describe('DiscoverMarkForCheckComponent', () => {
  let component: DiscoverMarkForCheckComponent;
  let fixture: ComponentFixture<DiscoverMarkForCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscoverMarkForCheckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscoverMarkForCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
