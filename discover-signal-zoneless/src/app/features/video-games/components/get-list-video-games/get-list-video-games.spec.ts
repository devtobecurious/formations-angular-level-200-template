import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetListVideoGames } from './get-list-video-games';

describe('GetListVideoGames', () => {
  let component: GetListVideoGames;
  let fixture: ComponentFixture<GetListVideoGames>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetListVideoGames]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetListVideoGames);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
