import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import {TestLibComponent} from 'maLib';
import { delay, of } from 'rxjs';
import { MyUpperCasePipe } from './my-upper-case.pipe';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestLibComponent, UpperCasePipe, MyUpperCasePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tets-app'
  titleBis = 'ToUsePipe'
  title$$ = signal<string>('test app')
  titleUpper$$ = computed(() => this.title$$().toUpperCase())

  counter$ = of(1).pipe(delay(1500))
  counter$$ = toSignal(this.counter$)

  ngOnInit(): void {
    // const comp = computed(() => this.title$$().toUpperCase())

    this.title = 'Vive SW 5'
    setTimeout(() => {
     this.title$$.set('Vive SW 6')
     this.title = 'Vive SW 6'
    }, 1500);
  }

  update(): void {}
}
