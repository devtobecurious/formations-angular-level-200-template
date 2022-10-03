import { Component, OnInit } from '@angular/core';
import { Profil } from '../models';
import { ProfilBusinessService } from '../services/profil-business.service';

@Component({
  selector: 'game-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(private service: ProfilBusinessService) { }

  ngOnInit(): void {

  }

}
