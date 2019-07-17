import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';
import {Observable, Subject, interval} from 'rxjs';
import { DataService } from '../services/data.service';



@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {
 // supression  de @Input() 
 col: Collegue;
modeEdit:boolean = false; 

  constructor(private dataService: DataService) { }

  ngOnInit() {
    // s'abonner au sujet voir l'exemple de Rossi 
    this.dataService.sabonner()
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
  }
  creationcollegue(){
    console.log('Creation d\'un nouveau collegue');
  }
}
