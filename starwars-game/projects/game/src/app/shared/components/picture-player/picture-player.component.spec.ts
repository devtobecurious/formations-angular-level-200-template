import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicturePlayerComponent } from './picture-player.component';

describe('PicturePlayerComponent', () => {
  let component: PicturePlayerComponent;
  let fixture: ComponentFixture<PicturePlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicturePlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PicturePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
