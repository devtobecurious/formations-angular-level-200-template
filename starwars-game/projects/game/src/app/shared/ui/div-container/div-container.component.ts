import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DivCardComponent } from '../div-card/div-card.component';
import { ContainerConfigService } from './container-config.service';

@Component({
  selector: 'game-div-container',
  standalone: true,
  imports: [
    CommonModule,
    DivCardComponent
  ],
  templateUrl: './div-container.component.html',
  styleUrls: ['./div-container.component.css'],
  providers: [
    ContainerConfigService
  ]
})
export class DivContainerComponent implements OnInit {

  constructor(private config: ContainerConfigService) { }

  ngOnInit(): void {
  }

}
