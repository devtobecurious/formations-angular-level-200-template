import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLibComponent } from './search-lib.component';

describe('SearchLibComponent', () => {
  let component: SearchLibComponent;
  let fixture: ComponentFixture<SearchLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchLibComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
