import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsAndInterfacesComponent } from './models-and-interfaces.component';

describe('ModelsAndInterfacesComponent', () => {
  let component: ModelsAndInterfacesComponent;
  let fixture: ComponentFixture<ModelsAndInterfacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelsAndInterfacesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelsAndInterfacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
