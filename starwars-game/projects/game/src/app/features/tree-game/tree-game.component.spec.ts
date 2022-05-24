import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeGameComponent } from './tree-game.component';

describe('TreeGameComponent', () => {
  let component: TreeGameComponent;
  let fixture: ComponentFixture<TreeGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreeGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
