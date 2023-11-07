import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMainComponent } from './search-main.component';

describe('SearchMainComponent', () => {
  let component: SearchMainComponent;
  let fixture: ComponentFixture<SearchMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
