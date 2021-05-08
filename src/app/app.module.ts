import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {MenuComponent} from './view/menu/menu.component';
import {PageNotFoundComponent} from './view/page-not-found/page-not-found.component';
import {AppRoutingModule, components} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {ConsigneListComponent} from './view/consigne/consigne-list/consigne-list.component';
import {ConsigneComponent} from './view/consigne/consigne.component';
import {ConsigneCourrierComponent} from './view/consigne/consigne-courrier/consigne-courrier.component';
import {TraitementComponent} from './view/traitement/traitement.component';
import {ListTraitementComponent} from './view/traitement/list-traitement/list-traitement.component';
import {TraitementCourrierComponent} from './view/traitement/traitement-courrier/traitement-courrier.component';


@NgModule({
  declarations: [
    AppComponent,
    components,
    MenuComponent,
    PageNotFoundComponent,
    ConsigneListComponent,
    ConsigneComponent,
    ConsigneCourrierComponent,
    TraitementComponent,
    ListTraitementComponent,
    TraitementCourrierComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
