import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { loadWookies } from '../services';

@Component({
  selector: 'app-wookie-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wookie-list.component.html',
  styleUrls: ['./wookie-list.component.css']
})
export class WookieListComponent implements OnInit {
  private readonly wookie$ = loadWookies();

  ngOnInit(): void {
    this.wookie$.subscribe(items => console.info(items));
  }
}
