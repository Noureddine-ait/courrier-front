import {Injectable} from '@angular/core';
import {Courrier} from '../model/courrier.model';

@Injectable({
  providedIn: 'root'
})
export class CourrierService {
  private _courrier: Courrier;
  private _courriers: Array<Courrier>;

  constructor() {
  }


  get courrier(): Courrier {
    return this._courrier;
  }

  set courrier(value: Courrier) {
    this._courrier = value;
  }

  get courriers(): Array<Courrier> {
    return this._courriers;
  }

  set courriers(value: Array<Courrier>) {
    this._courriers = value;
  }

}
