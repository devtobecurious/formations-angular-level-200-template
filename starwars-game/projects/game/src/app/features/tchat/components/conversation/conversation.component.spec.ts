import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationComponent } from './conversation.component';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

fdescribe('ConversationComponent', () => {
  let component: ConversationComponent;
  let fixture: ComponentFixture<ConversationComponent>;
  let httpTesting: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConversationComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConversationComponent);
    component = fixture.componentInstance;
    httpTesting = TestBed.inject(HttpTestingController);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should have 3 messages', () => {
  //   // Arrange
  //   component.items.set(['Hello', 'World', 'Angular']);
  //   // Act
  //   const table = fixture.nativeElement.querySelector('table');

  //   // Assert
  //   expect(table).toBeTruthy()
  //   //expect(component.items.length).toBe(component.items.length);
  //   expect(table.rows.length).toBe(component.items.length);
  // })

  it('should have 3 messages (with service)', () => {
    console.info('------------')
    fixture.detectChanges()
    const fakeRequest = httpTesting.expectOne('https://api.example.com/messagesList');

    //expect(fakeRequest.request.method).toBe('GET');

    fakeRequest.flush(['Hello', 'World', 'Angular']);

    httpTesting.verify()
    console.info('****')
  })
});
