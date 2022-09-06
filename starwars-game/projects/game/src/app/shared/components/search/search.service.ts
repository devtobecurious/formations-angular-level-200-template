import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class SearchService {

  private subBject = new BehaviorSubject<string>("");


  public get value() : BehaviorSubject<string> {
    return this.subBject;
  }

  public set newValue(str:string) {
    this.subBject.next(str);
  }

  constructor() { }


}
