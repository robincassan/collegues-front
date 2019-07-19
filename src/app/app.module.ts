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
import { BarreDeNavigationComponent } from './barre-de-navigation/barre-de-navigation.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RouterModule, Routes } from '@angular/router';
import { GallerieComponent } from './gallerie/gallerie.component';
import { AProposComponent } from './a-propos/a-propos.component';

const routes: Routes = [{ path:'Accueil', component: AccueilComponent},
                         { path:'Gallerie', component: GallerieComponent},
                          {path:'A propos', component: AProposComponent}];

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheParNomComponent,
    CreateCollegueComponent,
    GestionCollegueComponent,
    BarreDeNavigationComponent,
    AccueilComponent,
    GallerieComponent,
    AProposComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    NgbModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
