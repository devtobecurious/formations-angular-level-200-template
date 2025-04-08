import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal, untracked } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.ng.html',
  styleUrl: './app.css',
  imports: [UpperCasePipe]
})
export class App {
  title = signal('mon-app'); // statefull
  titleToUpper = computed(() => this.title().toUpperCase()) // selector // comme operator map de rxjs
  titleBefore = 'mon-app'

  civilite = signal('Monsieur')
  firstName = signal('Matthieu')
  lastName = signal('Labbaye')
  firstLastName = computed(() => `${untracked(this.civilite)} ${this.firstName().toUpperCase()} - ${this.lastName().toUpperCase()}`)

  secu = computed(() => ({
    firstName: this.firstName(),
    numeroSecuriteSocial: signal('')
  }))

  ngOnInit(): void {
    this.secu().numeroSecuriteSocial.set('12345')
    console.info('Ng on init ?')
  }

  getTitleBis(): string {
    return (new Date()).toString()
  }

  updateBefore(): void {
    setTimeout(() => {
      this.titleBefore = 'mon app bis'
    }, 1000);
  }
  updateSignal(): void {
    setTimeout(() => {
      this.title.set('mon app biss')
    }, 1000)
  }
}
