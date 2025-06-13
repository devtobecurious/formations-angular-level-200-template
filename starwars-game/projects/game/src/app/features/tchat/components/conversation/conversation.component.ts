import { Component, inject, OnInit, signal } from '@angular/core';
import { GetListMessagesService } from '../../services/get-list-messages.service';

@Component({
  selector: 'game-conversation',
  imports: [],
  templateUrl: './conversation.component.html',
  styleUrl: './conversation.component.css'
})
export class ConversationComponent implements OnInit {
  private readonly service = inject(GetListMessagesService)
  items = signal<string[]>([])

  ngOnInit(): void {
    this.service.getAll().subscribe({
      next: (res) => {
        this.items.set(res)
        console.info('==> RETOUR')
      }
    })
  }
}
