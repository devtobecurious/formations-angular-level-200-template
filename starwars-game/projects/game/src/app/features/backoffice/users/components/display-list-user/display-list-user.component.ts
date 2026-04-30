import { Component, inject } from '@angular/core';
import { GetListUserFromApiService } from '../../services/get-list-user-from-api.service';

@Component({
  selector: 'game-display-list-user',
  imports: [],
  templateUrl: './display-list-user.component.html',
  styleUrl: './display-list-user.component.css'
})
export class DisplayListUserComponent {
  private readonly getListUserFromApiService = inject(GetListUserFromApiService);
  protected readonly userListResource = this.getListUserFromApiService.usersResource;

  filter() {
    // this.userListResource.reload();
    this.getListUserFromApiService.filter.set('new filter value');
  }
}
