import { Component, OnInit } from '@angular/core';

export interface DroideX {
  id: number;
  matricule: string;
}

export class Droide implements DroideX {

  constructor(public id: number, public matricule: string, private weight: number, size: number) {
    console.info('Droide appelé ??');
  }
}

export declare type DroideT = { id: number, matricule: string };

const droide = new Droide(1, '11', 150, 123);
//droide.fight();


@Component({
  selector: 'game-models-and-interfaces',
  templateUrl: './models-and-interfaces.component.html',
  styleUrls: ['./models-and-interfaces.component.css']
})
export class ModelsAndInterfacesComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    const droide = new Droide(1, '123', 12, 10);

    // const droide2: Droide = {
    //   id: 1,
    //   matricule: '12345',
    //   weight: 10
    // };

    const droide3 = {
      id: 1,
      matricule: '12345'
    };

    let droide31: { id: number, matricule: string };
    droide31 = {
      id: 1,
      matricule: '12345'
    };

    const droide4: DroideX = {
      id: 1,
      matricule: '12345'
    };

    this.display(droide);
    // this.display(droide2);
    this.display(droide3);
    this.display(droide4);

    this.displayT(droide);
    this.displayT(droide3);
    this.displayT(droide31);
    this.displayT(droide4);
  }

  display(item: DroideX) {
    console.info(item);
  }

  displayT(item: { id: number, matricule: string }) {
    console.info(item);
  }

  displayTd(item: DroideT) {
    console.info(item);
  }

}
