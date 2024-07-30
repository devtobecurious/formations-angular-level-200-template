import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPeopleComponent } from './select-people.component';

describe('SelectPeopleComponent', () => {
  let component: SelectPeopleComponent;
  let fixture: ComponentFixture<SelectPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectPeopleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
