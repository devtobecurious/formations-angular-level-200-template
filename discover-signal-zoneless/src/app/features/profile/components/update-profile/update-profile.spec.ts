import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProfile } from './update-profile';

describe('UpdateProfile', () => {
  let component: UpdateProfile;
  let fixture: ComponentFixture<UpdateProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateProfile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateProfile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
