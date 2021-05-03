import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CreerCourrierComponent} from './view/courrier/creer-courrier/creer-courrier.component';
import {ConsigneCourrierComponent} from './view/consigne-courrier/consigne-courrier.component';
import {TraitementCourrierComponent} from './view/traitement-courrier/traitement-courrier.component';
import {ServiceTraitantComponent} from './view/service-traitant/service-traitant.component';
import {ListeCourrierComponent} from './view/courrier/liste-courrier/liste-courrier.component';
import {PageNotFoundComponent} from './view/page-not-found/page-not-found.component';
// tslint:disable-next-line:max-line-length
export const components = [CreerCourrierComponent, ConsigneCourrierComponent, TraitementCourrierComponent, ServiceTraitantComponent, ListeCourrierComponent];
const routes: Routes = [
  {path: '', component: components[0]},
  {path: 'creer-courrier', component: components[0]},
  {path: 'consigne-courrier', component: components[1]},
  {path: 'traitement-courrier', component: components[2]},
  {path: 'service-traitant', component: components[3]},
  {path: 'liste-courrier', component: components[4]},
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
