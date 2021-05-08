import {Injectable} from '@angular/core';
import {Courrier} from '../model/courrier.model';
import {ConsigneCourrier} from '../model/consigne-courrier.model';

@Injectable({
  providedIn: 'root'
})
export class ConsigneCourrierService {

  private _consigneCourrier: ConsigneCourrier;
  private _consigneCourriers: Array<ConsigneCourrier>;


  constructor() {
  }

  get consigneCourriers(): Array<ConsigneCourrier> {
    return this._consigneCourriers;
  }
  get consigneCourrier(): ConsigneCourrier {
    return this._consigneCourrier;
  }
}
