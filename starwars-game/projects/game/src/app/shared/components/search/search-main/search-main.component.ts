import { AfterViewInit, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchItemDTO } from '../models';
import { SearchBusService } from '../services/search-bus.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'game-search-main',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-main.component.html',
  styleUrl: './search-main.component.css'
})
export class SearchMainComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const monService = inject(SearchBusService); // Pas possible : pas un environnement d'injection
  }
  
  item: SearchItemDTO = {value: ''};
  private searchStore = inject(SearchBusService); // Environnement de construction

  search() {
    this.searchStore.save(this.item);
  }
}
