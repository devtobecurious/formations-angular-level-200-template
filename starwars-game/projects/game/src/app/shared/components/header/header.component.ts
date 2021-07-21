import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'game-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchItem = '';

  constructor(private service: SearchService) { }

  ngOnInit(): void {
  }

  clickToSearch() {
    this.service.search(this.searchItem);
  }
}
