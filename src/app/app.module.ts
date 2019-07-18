import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreateCollegueComponent } from './create-collegue/create-collegue.component';
import { GestionCollegueComponent } from './gestion-collegue/gestion-collegue.component';

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheParNomComponent,
    CreateCollegueComponent,
    GestionCollegueComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
