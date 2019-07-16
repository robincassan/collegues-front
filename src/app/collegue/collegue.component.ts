import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';


@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {
@Input() col: Collegue;
modeEdit:boolean = false; 
  constructor() { }

  ngOnInit() {
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
