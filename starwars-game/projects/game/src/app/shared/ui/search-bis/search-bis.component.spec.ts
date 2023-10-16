import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBisComponent } from './search-bis.component';

describe('SearchBisComponent', () => {
  let component: SearchBisComponent;
  let fixture: ComponentFixture<SearchBisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SearchBisComponent]
    });
    fixture = TestBed.createComponent(SearchBisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
