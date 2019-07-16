import { Injectable } from '@angular/core';
import { listeMatricules } from '../mock/matricules.mock';
import { col } from '../mock/collegues.mock';
import { Collegue } from '../models/Collegue';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  matricules: string[] = listeMatricules;
  constructor() { }

  rechercherParNom(nom: string): string[] {
    return this.matricules;// TODO retourner une liste de matricules fictifs à partir du fichier `src/app/mock/matricules.mock.ts`.  
  }

  recupererCollegueCourant(): Collegue {
    // TODO retourner le collègue fictif à partir du fichier `src/app/mock/collegues.mock.ts`.

    return col;
  }

}