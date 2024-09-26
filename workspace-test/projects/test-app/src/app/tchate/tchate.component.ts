import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { observeNotification } from 'rxjs/internal/Notification';

@Component({
  selector: 'app-tchate',
  standalone: true,
  imports: [],
  templateUrl: './tchate.component.html',
  styleUrl: './tchate.component.css'
})
export class TchateComponent implements OnInit {
  content = '';

  ngOnInit(): void {
    const obs$ = new Observable(observer => {
      // socketio.onMessage = (mess) =>  {
        const mess = 'ah que coucou'
        observer.next(mess)
      // });
    });
    obs$.subscribe({
      next: mess =>  this.content += mess
    })
  }
}
