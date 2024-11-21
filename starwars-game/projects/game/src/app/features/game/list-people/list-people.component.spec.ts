import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPeopleComponent } from './list-people.component';
import { GetAllPeopleService } from './services/get-all-people.service';
import { fakeGetAllPeopleService } from './services/mocks.services';

fdescribe('ListPeopleComponent', () => {
  let component: ListPeopleComponent;
  let fixture: ComponentFixture<ListPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPeopleComponent],
      providers: [
        { provide: GetAllPeopleService, useValue: fakeGetAllPeopleService}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPeopleComponent);
    component = fixture.componentInstance;
//     fixture.detectChanges();
    fixture.autoDetectChanges(true)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get title : List of people', () => {
    const expectedTitle = 'List of people'

    const h1 = fixture.nativeElement.querySelector('h1')

    expect(h1).toBeTruthy()
    expect(h1.innerText).toBe(expectedTitle)
  })

  it('should get two people in table (2 rows)', () => {
    // Arrange

    // Act
    const tables = fixture.nativeElement.querySelectorAll('table.underline')

    // Assert
    expect(tables.length).toBe(1)
    expect(tables[0].rows.length).toBe(2)
  });
});
