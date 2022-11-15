import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerConfigService } from '../div-container/container-config.service';

@Component({
  selector: 'game-div-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './div-card.component.html',
  styleUrls: ['./div-card.component.css']
})
export class DivCardComponent implements OnInit {

  constructor(private config: ContainerConfigService) { }

  ngOnInit(): void {
  }

}
