import {Injectable} from '@angular/core';
import {ConsigneCourrier} from '../model/consigne-courrier.model';
import {TraitementCourrier} from '../model/traitement-courrier.model';

@Injectable({
  providedIn: 'root'
})
export class TraitementCourrierService {

  private _traitementCourrier: TraitementCourrier;
  private _traitementCourriers: Array<TraitementCourrier>;

  constructor() {
  }

  get traitementCourriers(): Array<TraitementCourrier> {
    return this._traitementCourriers;
  }

  get traitementCourrier(): TraitementCourrier {
    return this._traitementCourrier;
  }
}
