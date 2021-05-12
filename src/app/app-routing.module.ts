import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CreerCourrierComponent} from './view/courrier/creer-courrier/creer-courrier.component';
import {ConsigneCourrierComponent} from './view/consigne/consigne-courrier/consigne-courrier.component';
import {TraitementCourrierComponent} from './view/traitement/traitement-courrier/traitement-courrier.component';
import {ServiceTraitantComponent} from './view/service-traitant/service-traitant.component';
import {ListeCourrierComponent} from './view/courrier/liste-courrier/liste-courrier.component';
import {PageNotFoundComponent} from './view/page-not-found/page-not-found.component';
import {ConsigneComponent} from './view/consigne/consigne.component';
import {TraitementComponent} from './view/traitement/traitement.component';
// tslint:disable-next-line:max-line-length
const routes: Routes = [
  {path: '', component: CreerCourrierComponent},
  {path: 'creer-courrier', component: CreerCourrierComponent},
  {path: 'creer-courrier/consigne', component: ConsigneComponent},
  {path: 'creer-courrier/traitement', component: TraitementComponent},
  {path: 'creer-courrier/service-traitant', component: ServiceTraitantComponent},
  {path: 'liste-courrier', component: ListeCourrierComponent},
  {path: '**', component: PageNotFoundComponent}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
