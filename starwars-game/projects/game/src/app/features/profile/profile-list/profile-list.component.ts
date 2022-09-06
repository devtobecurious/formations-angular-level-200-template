import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from '../services/profile.service';
import { CharacterDto } from '../models/player';
import { LoggerService } from '../../../shared/services/logger.service';

@Component({
  selector: 'game-profile-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {
  listAll: CharacterDto[]= [];

  constructor(
    private readonly profileService: ProfileService, // C'est un type donné, qui est un contrat en fait !,
    private readonly logger: LoggerService
  ) {

  }

  ngOnInit(): void {
    this.profileService.getAll().subscribe((listAll) => {
      this.listAll = listAll;
    });

    this.logger.log('ProfileList:: init');
  }


}
