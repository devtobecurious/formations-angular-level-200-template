import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TreeService } from './services';

@Component({
  selector: 'game-tree-game',
  templateUrl: './tree-game.component.html',
  styleUrls: ['./tree-game.component.css']
})
export class TreeGameComponent implements OnInit {
  items$ !: Observable<{id: string, age: string, diametre: number, familles: string}[]>;

  constructor(private service: TreeService) { }

  ngOnInit(): void {
    //this.service.getAll().subscribe(items => this.items$ = );
    this.items$ = this.service.getAll();
  }

}
