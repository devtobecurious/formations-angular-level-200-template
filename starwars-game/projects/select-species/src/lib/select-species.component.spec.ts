import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSpeciesComponent } from './select-species.component';
import { GetAllSpeciesService } from './get-all-species.service';
import { Observable, of } from 'rxjs';
import { Species } from './models/specie';

const fakeService: GetAllSpeciesService = {
  getAll(): Observable<Species> {
    const table =[
      { id: 1, label: 'Human' },
      { id: 2, label: 'Droid' }
    ]

    return of(table)
  }
}

fdescribe('SelectSpeciesComponent', () => {
  let component: SelectSpeciesComponent;
  let fixture: ComponentFixture<SelectSpeciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectSpeciesComponent],
      providers: [
        { provide: GetAllSpeciesService, useValue: fakeService}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectSpeciesComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
    fixture.autoDetectChanges(true)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should be 2 species in my select', () => {
    // Arrange

    // Act
    const table = fixture.nativeElement.querySelector('table')

    // Assert
    expect(table).toBeTruthy(table)
    expect(table.rows.length).toBe(2)
  });
});
