import { Component, OnInit } from '@angular/core';
import { col } from '../mock/collegues.mock';
import { listeMatricules } from '../mock/matricules.mock';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
})
export class RechercheParNomComponent implements OnInit {

  matricules: string[];

  constructor() { }

  ngOnInit() {
  }
  rechercher(){
    this.matricules = listeMatricules;
  }

}
