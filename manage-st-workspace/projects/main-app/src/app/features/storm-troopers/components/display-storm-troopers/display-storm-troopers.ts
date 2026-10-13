import { Component, inject } from '@angular/core';
import { GetListStsAsBusiness } from '../../services/get-list-sts-as-business';

@Component({
  imports: [],
  selector: 'app-display-storm-troopers',
  styleUrl: './display-storm-troopers.css',
  templateUrl: './display-storm-troopers.html',
})
export class DisplayStormTroopers {
  // private readonly service = inject(GetListStsAsBusiness);
  // protected readonly list = this.service.getList();
  
  protected readonly list = (inject(GetListStsAsBusiness)).getList();
}
