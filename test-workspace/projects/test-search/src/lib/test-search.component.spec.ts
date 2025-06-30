import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSearchComponent } from './test-search.component';

describe('TestSearchComponent', () => {
  let component: TestSearchComponent;
  let fixture: ComponentFixture<TestSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
