import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'game-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css'],

})
export class CreateProfileComponent implements OnInit {

  //constructor(private builder: FormBuilder) {
  // constructor() {
  //   this.builder.group({
  //     surname: ['', ]
  //   })
  //}

  calculer() {
    console.info('appel');
  }

  ngOnInit(): void {
  }

}
