import {Injectable} from '@angular/core';
import {Courrier} from '../model/courrier.model';
import {ConsigneCourrier} from '../model/consigne-courrier.model';

@Injectable({
  providedIn: 'root'
})
export class ConsigneCourrierService {
  private _consigneCourrier: ConsigneCourrier;

  constructor() {
  }


  get consigneCourrier(): ConsigneCourrier {
    return this._consigneCourrier;
  }
}
