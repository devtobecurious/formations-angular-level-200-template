import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'game-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  private maValeur!: string; // | undefined;

  constructor(private readonly route: ActivatedRoute,
    private readonly router: Router) {
    //this.maValeur = '';
  }

  ngOnInit(): void {
    // this.route.data.subscribe
    const force = this.route.snapshot.data.typeForce;

    this.router.navigate(['games', 1]);
    // const valeur: string | number = 1;
    // if( typeof(valeur) === 'number') {
    //   valeur
    // }
  }

}
