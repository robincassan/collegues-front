import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';


@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {
@Input() col: Collegue;
  constructor() { }

  ngOnInit() {
  }

  modificationcollegue(){
    console.log('Modification du collègue');
  }
  creationcollegue(){
    console.log('Creation d\'un nouveau collegue');
  }
}
