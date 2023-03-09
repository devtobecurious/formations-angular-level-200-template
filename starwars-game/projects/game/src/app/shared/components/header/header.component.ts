import { Component, NgModule } from '@angular/core';

@Component({
  // standalone: true,
  // imports: [CommonModule],
  selector: 'game-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

}

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule {
}
