import { Component } from '@angular/core';
import { DisplayAllCharacters } from '../../components/display-all-characterss/display-all-characterss';
import { DisplayAllMovies } from '../../components/display-all-movies/display-all-movies';

@Component({
  selector: 'app-movies.page',
  imports: [DisplayAllCharacters, DisplayAllMovies],
  templateUrl: './movies.page.html',
  styleUrl: './movies.page.css',
})
export class MoviesPage {
}
