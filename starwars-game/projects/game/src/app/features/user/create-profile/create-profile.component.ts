import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'game-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {
  user: any;
  profileForm !: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.profileForm = this.formBuilder.group({
      surname: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  ngOnInit(): void {
  }

  save() {
    const monObjetASauver = this.profileForm.value;
  }
}

@NgModule({
  declarations: [
    CreateProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CreateProfileComponent
  ]
})
export class CreateProfileModule { }
