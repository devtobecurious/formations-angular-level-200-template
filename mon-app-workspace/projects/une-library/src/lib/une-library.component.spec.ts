import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UneLibraryComponent } from './une-library.component';

describe('UneLibraryComponent', () => {
  let component: UneLibraryComponent;
  let fixture: ComponentFixture<UneLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UneLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UneLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
