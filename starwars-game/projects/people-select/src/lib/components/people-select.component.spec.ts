import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleSelectComponent } from './people-select.component';

describe('PeopleSelectComponent', () => {
  let component: PeopleSelectComponent;
  let fixture: ComponentFixture<PeopleSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeopleSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
