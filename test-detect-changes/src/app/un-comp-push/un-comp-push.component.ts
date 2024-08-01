import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-un-comp-push',
  standalone: true,
  imports: [],
  templateUrl: './un-comp-push.component.html',
  styleUrl: './un-comp-push.component.css',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class UnCompPushComponent implements AfterViewInit, OnChanges {
  cd = inject(ChangeDetectorRef)
  @Input() client !: {name: string, surname: string}

  ngOnChanges(changes: SimpleChanges): void {
    console.info('UnCompPushComponent=>ngOnChanges')
  }

  ngOnInit(): void {
    console.info('UnCompPushComponent=>ngOnInit')

    setTimeout(() => {
      this.client.name = 'tutu'
      console.info('UnCompPushComponent=>settimeout')
      this.cd.markForCheck()
    }, 1500);

  }

  ngAfterViewInit(): void {
    console.info('UnCompPushComponent=>ngAfterViewInit')
    this.cd.markForCheck()
  }

  display(): void {
    console.info('UnCompPushComponent')
  }

  setName(name: string): void {
    this.client.name = name
  }

  clickMe(): void {}
}
