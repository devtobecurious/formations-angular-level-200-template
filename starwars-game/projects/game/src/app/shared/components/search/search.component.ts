import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchService } from './search.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'game-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  valeurDuSearch = "";
  constructor(private readonly searchService: SearchService) { }

  ngOnInit(): void {
  }

  setValue():void{
    this.searchService.newValue = "";


  }
}
