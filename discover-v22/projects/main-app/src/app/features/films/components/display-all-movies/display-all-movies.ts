import { Component, inject } from '@angular/core';
import { GetAllMovies } from '../../services/get-all-movies';

@Component({
  selector: 'app-display-all-movies',
  imports: [],
  templateUrl: './display-all-movies.html',
  styleUrl: './display-all-movies.css',
  providers: [
    GetAllMovies
  ]
})
export class DisplayAllMovies {
  private readonly service = inject(GetAllMovies);
  protected readonly fromApiValue = this.service.getAllFiltered();
  protected readonly isLoading = this.service.loading;
}
