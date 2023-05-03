import { NgSwitch, NgSwitchCase } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [NgSwitch],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'version-seize';
}
