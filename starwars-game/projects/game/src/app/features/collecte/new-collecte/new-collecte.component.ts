import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'game-new-collecte',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './new-collecte.component.html',
  styleUrl: './new-collecte.component.css'
})
export class NewCollecteComponent {
  private readonly formBuilder = inject(FormBuilder);

  // readonly collectForm = this.formBuilder.group({
  //   surname: ['', [Validators.required, Validators.minLength(3)]],
  //   email: ['', [Validators.required, Validators.email]]
  // });

  readonly collectForm = this.formBuilder.group({
    user: this.formBuilder.group({
      surname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]]
    })
  });

  ngOnInit(): void {
    this.collectForm.setValue({
      user: {
        surname: 'Doe',
        email: ''
      }
    });

    // this.collectForm.patchValue({
    //   surname: 'Doe',
    // });
  }

  save(): void {

    console.log(this.collectForm.value?.user?.surname);
  }

  get surnameIsValid(): boolean {
    return this.collectForm.controls.user.controls.surname.valid;
  }

  get emailIsValid(): boolean {
    return this.collectForm.controls.user.controls.email.valid;
  }
}
