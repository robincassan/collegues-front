import { Component, OnInit } from '@angular/core';
import { col } from '../mock/collegues.mock';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
})
export class RechercheParNomComponent implements OnInit {

  matricules: string[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }
  rechercher(){
    this.matricules = this.dataService.rechercherParNom('');
  }

}
