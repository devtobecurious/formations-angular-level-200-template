import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeOneSideBarComponent } from './resume-one-side-bar.component';

describe('ResumeOneSideBarComponent', () => {
  let component: ResumeOneSideBarComponent;
  let fixture: ComponentFixture<ResumeOneSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeOneSideBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeOneSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
