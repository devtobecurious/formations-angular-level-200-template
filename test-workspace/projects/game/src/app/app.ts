import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as d3 from 'd3';
import {Search} from 'my-search'

//declare const d3: any;

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Search],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'game';

  ngOnInit(): void {
    d3.select('body').style('background-color', 'lightblue');
  }
}
