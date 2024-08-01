import { Component, inject } from '@angular/core';
import { FriendsStore } from '../../store';

@Component({
  selector: 'game-list-friends',
  standalone: true,
  imports: [],
  templateUrl: './list-friends.component.html',
  styleUrl: './list-friends.component.css',
  //providers: [FriendsStore]
})
export class ListFriendsComponent {
  store = inject(FriendsStore)

  ngOnInit(): void {
    // this.store.init({ filter: ''});
    this.store.addOne({ name: ''});
  }
}
