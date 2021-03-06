import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Collegue } from '../models/Collegue';
import {Observable, Subject, interval, Subscription} from 'rxjs';
import { DataService } from '../services/data.service';



@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})

export class CollegueComponent implements OnInit, OnDestroy {
 // supression  de @Input() 
 col: Collegue;
modeEdit:boolean = false;
modeCreate: boolean = false; 
actionSub: Subscription

saisieEdit:any = {};

@Output() modecreer = new EventEmitter();



  constructor(private dataService: DataService) { }

  ngOnInit() {
    // s'abonner au sujet voir l'exemple de Rossi 
   this.actionSub = this.dataService.sabonner()
    .subscribe(collegueSelectionne =>  {
      this.col = collegueSelectionne;
    })
  }

  modifier(){
    console.log('Modification du collègue');
    this.modeEdit = true;
  }

  valider() {
    this.modeEdit = false;
    console.log(this.saisieEdit);
  }
  creationcollegue(){
    console.log('Creation d\'un nouveau collegue');
    this.modeCreate = true;
    this.modecreer.emit();
  }
  ngOnDestroy(){
    // désabonnement du composant avant sa destruction

    this.actionSub.unsubscribe();
  }
  modifCollegue() {
    return this.dataService.modifCollegue(this.col.matricule, this.saisieEdit).subscribe()
  }
  
  
}
