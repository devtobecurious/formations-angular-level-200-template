import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject, signal, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { Observable, distinctUntilChanged, of, pairwise } from 'rxjs';
import { VideoGames } from '../models';
import { VideoGamesApplication } from '../services/video-games.business';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'game-new-collecte',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    JsonPipe,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    AsyncPipe
  ],
  templateUrl: './new-collecte.component.html',
  styleUrl: './new-collecte.component.css'
})
export class NewCollecteComponent {
  private readonly formBuilder = inject(FormBuilder);
  @ViewChild(MatAccordion, { static: true }) accordion !: MatAccordion;
  step = 0;
  videoGames$ = inject(VideoGamesApplication).getAll();

  consoles$ = of<{ id: number, label: string, version: number }[]>([
    { id: 1, label: 'PS4', version: 1 },
    { id: 2, label: 'PS3', version: 3 },
    { id: 3, label: 'PS2', version: 2 },
    { id: 4, label: 'PS1', version: 4 }
  ]);

  titreGame = signal<string>('');

  set selected(value: string) {
    console.log(value);
    this.titreGame.set(value);
  }

  // readonly collectForm = this.formBuilder.group({
  //   surname: ['', [Validators.required, Validators.minLength(3)]],
  //   email: ['', [Validators.required, Validators.email]]
  // });

  readonly collectForm = this.formBuilder.group({
    user: this.formBuilder.group({
      surname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]]
    }),
    consoles: this.formBuilder.group({
      list: this.formBuilder.array<FormGroup>([], [Validators.required]),
    }),
    game: this.formBuilder.group({
      id: ['', [Validators.required]]
    })
  });

  private generateFormGroupConsole(console: { id: number, label: string, version: number }): void {
    this.collectForm.controls.consoles.controls.list.push(
      this.formBuilder.group({
        id: console.id,
        isSelected: false,
      })
    );
  }

  ngOnInit(): void {
    this.consoles$.subscribe({
      next: consoles => {
        consoles.forEach(console => this.generateFormGroupConsole(console));
      }
    });

    this.collectForm.valueChanges
      .pipe(
        distinctUntilChanged(), /// ne récupère que les valeurs différentes
        pairwise() /// récupère l'ancienne et la valeur courante
      )
      .subscribe(
        {
          next: ([previousValue, currentValue]) => {
            console.log(previousValue, currentValue);
          }
        }
      );
    // this.collectForm.setValue({
    //   user: {
    //     surname: 'Doe',
    //     email: ''
    //   }
    // });

    // this.collectForm.patchValue({
    //   surname: 'Doe',
    // });
  }

  save(): void {

    console.log(this.collectForm.value?.user?.surname);
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }


  get surnameIsValid(): boolean {
    return this.collectForm.controls.user.controls.surname.valid;
  }

  get emailIsValid(): boolean {
    return this.collectForm.controls.user.controls.email.valid;
  }

  get userGroupIsValid(): boolean {
    return this.collectForm.controls.user.valid;
  }

  get gameIdIsValid(): boolean {
    return this.collectForm.controls.game.controls.id.valid;
  }
}
