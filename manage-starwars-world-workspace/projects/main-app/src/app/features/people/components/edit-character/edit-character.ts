import { Component, computed, effect, input, linkedSignal, OnChanges, output, signal, SimpleChanges } from '@angular/core';
import { Character, CharacterWithoutUrl } from '../../models/character';
import { XhrFactory } from '@angular/common';
import { form, FormField, FormRoot } from '@angular/forms/signals';
import { characterSchema } from '../../models/character.schemas';

@Component({
  imports: [FormField, FormRoot],
  selector: 'app-edit-character',
  styleUrl: './edit-character.css',
  templateUrl: './edit-character.html',
})
export class EditCharacter { // implements OnChanges {

  character = input.required<CharacterWithoutUrl>()
  // protected readonly tempCharacter = computed(() => signal(this.character()))
  protected readonly tempCharacter = linkedSignal(this.character);

  protected readonly editForm = form(this.tempCharacter, characterSchema);

  getOne = output<Character>()

  ngOnInit() {

  }

//  ngOnChanges(changes: SimpleChanges): void {
//     changes.character.currentValue
//   }

  // private myEffect = effect(() => {
  //   const characterItem = this.character()

  //   if(characterItem) {
  //     this.tempCharacter.set(characterItem)
  //   }
  // })

  //  private myEffectBis = effect(() => {
  //   const characterItem = this.character()

  //   if(characterItem) {
  //     this.tempCharacter.set(characterItem)
  //   }
  // })


}
