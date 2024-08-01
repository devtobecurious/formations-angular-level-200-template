import { Component, computed, effect, OnDestroy, OnInit, signal, untracked } from '@angular/core';

@Component({
  selector: 'game-discover-signal',
  standalone: true,
  imports: [],
  templateUrl: './discover-signal.component.html',
  styleUrl: './discover-signal.component.css'
})
export class DiscoverSignalComponent implements OnDestroy, OnInit {
  title = signal<string>('Discovery');
  subTitle = signal<string>('Channel');
  titleUpper = computed(() => this.title().toUpperCase());

  titleEffect = effect(() => {
    const title = this.title();
    const subTitle = untracked(this.subTitle);

    console.info(subTitle);
  });

  update(): void {
    this.title.set('Huston, on a un problème');
  }

  ngOnInit(): void {
    console.info('----------')

    setTimeout(() => {
      console.info(this.title())
    }, 0);

    console.info('**********')
  }

  ngOnDestroy(): void {
    this.titleEffect.destroy();
  }

}
