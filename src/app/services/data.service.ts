import { Injectable } from '@angular/core';
import { listeMatricules } from '../mock/matricules.mock';
import { col } from '../mock/collegues.mock';
import { Collegue } from '../models/Collegue';
import {environment} from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  matricules: string[] = listeMatricules;
  private subject = new Subject<Collegue>();

  publier(matricule:string) {

    this.rechercheParMatricule(matricule)
      .subscribe(col => {
        this.subject.next(col);
      })
  
  }

  sabonner(): Observable<Collegue> {
    return this.subject.asObservable();
  }

  constructor(private httpClient: HttpClient) { }

  rechercherParNom(nom: string): Observable <string[]> {
    return this.httpClient.get <string[]> (`${environment.backendUrl}/collegues?nom=${nom}`);


    // TODO retourner une liste de matricules fictifs à partir du fichier `src/app/mock/matricules.mock.ts`.  
    // faire requete http
  }

  recupererCollegueCourant(): Collegue {
    // TODO retourner le collègue fictif à partir du fichier `src/app/mock/collegues.mock.ts`.

    return col;
  }
  rechercheParMatricule( matricule: string): Observable <Collegue> {
    return this.httpClient.get <Collegue> (`${environment.backendUrl}/collegues/${matricule}`);

  }

}