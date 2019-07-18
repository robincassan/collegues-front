import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-collegue',
  templateUrl: './gestion-collegue.component.html',
  styleUrls: ['./gestion-collegue.component.css']
})
export class GestionCollegueComponent implements OnInit {

  modeAffichageCollegue:boolean = true;
  constructor() { }

  ngOnInit() {
  }

  traiterEvtCreer() {
    this.modeAffichageCollegue = false;
  }

}
