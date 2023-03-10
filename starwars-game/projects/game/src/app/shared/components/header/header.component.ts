import { Component, NgModule } from '@angular/core';
import { SearchModule } from '../search/search.component';

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
  imports: [
    SearchModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule {
}
