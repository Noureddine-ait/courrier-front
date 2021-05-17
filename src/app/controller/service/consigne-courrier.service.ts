import {Injectable} from '@angular/core';
import {Courrier} from '../model/courrier.model';
import {ConsigneCourrier} from '../model/consigne-courrier.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsigneCourrierService {
  private _urlBase = 'http://localhost:8036';
  private _url = '/application/ConsigneCourrier';
  private _consigneCourrier: ConsigneCourrier;
  private _consigneCourriers: Array<ConsigneCourrier>;
  private _indice: number;

  constructor(private http: HttpClient) {
  }


  // tslint:disable-next-line:typedef
  public save() {
    if (this.consigneCourrier.id == null){
      const con = this.cloneConsigne(this.consigneCourrier);
      this.http.post(this._urlBase + this._url + '/', this.consigneCourrier).subscribe(
        data => {
          if (data > 0) {
            console.log(this.consigneCourrier);
            this.consigneCourriers.push(con);
          } else {
            alert('echec !!' + data);
          }
        }
      );
    }
  }


  // tslint:disable-next-line:typedef
  private cloneConsigne(consigne: ConsigneCourrier) {
    const cloneCons = new ConsigneCourrier();
    cloneCons.libelle = consigne.libelle;
    cloneCons.dateConsigne = consigne.dateConsigne;
    cloneCons.responsable = consigne.responsable;
    cloneCons.entiteAdmin = consigne.entiteAdmin;
    return cloneCons;
  }

  get consigneCourriers(): Array<ConsigneCourrier> {
    return this._consigneCourriers;
  }
  get consigneCourrier(): ConsigneCourrier {
    return this._consigneCourrier;
  }

}
