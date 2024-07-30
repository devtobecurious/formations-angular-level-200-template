import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FightPromObsComponent } from './fight-prom-obs.component';

describe('FightPromObsComponent', () => {
  let component: FightPromObsComponent;
  let fixture: ComponentFixture<FightPromObsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FightPromObsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FightPromObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
