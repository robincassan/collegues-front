import { Component, OnInit } from '@angular/core';
import { col } from '../mock/collegues.mock';
import { DataService } from '../services/data.service';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
})
export class RechercheParNomComponent implements OnInit {

  matricules: string[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }
  rechercher(nomSaisi: string){
   this.dataService.rechercherParNom(nomSaisi).subscribe(tableaumatriculerecupere => this.matricules = tableaumatriculerecupere);
  }
  afficherinfos(m:string){
    this.dataService.publier(m) // faire un post à la place du log
    
  }

}
