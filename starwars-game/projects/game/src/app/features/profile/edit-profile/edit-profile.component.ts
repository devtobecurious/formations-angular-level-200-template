import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'game-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {

  constructor() { }

  ngAfterViewInit(): void {
    console.info('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    console.info('ngOnDestroy');
  }

  ngOnInit(): void {
    console.info('ngOnInit');
  }

}
