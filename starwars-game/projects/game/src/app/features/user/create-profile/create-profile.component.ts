import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

export declare type User = {
  surname: string,
  xp: number
}

export declare type Super = {
}



@Component({
  selector: 'game-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css'],

})
export class CreateProfileComponent implements OnInit {
  public user:  {surname: string, xp: number} = { surname: '', xp: 0};
  public user2 = { surname: ''};
  public user3: User = { surname: '', xp: 0};


  //constructor(private builder: FormBuilder) {
  // constructor() {
  //   this.builder.group({
  //     surname: ['', ]
  //   })
  //}

  bindByDefault(user: {surname: string}) {

  }

  calculer() {
    console.info('appel');
  }

  ngOnInit(): void {
    this.bindByDefault({
      surname: ''
    });

  }

  save() {
    // this.user.xp = 'aa';
  }

}
