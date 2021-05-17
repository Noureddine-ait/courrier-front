import {Injectable} from '@angular/core';
import {Courrier} from '../model/courrier.model';
import {HttpClient} from '@angular/common/http';
import {ConsigneCourrier} from '../model/consigne-courrier.model';
import {TraitementCourrier} from '../model/traitement-courrier.model';

@Injectable({
  providedIn: 'root'
})
export class CourrierService {
  private _urlBase = 'http://localhost:8036';
  private _url = '/application/courrier';
  private _urlConsigne = 'http://localhost:8036/application/ConsigneCourrier/';
  private _urlTraitement = 'http://localhost:8036/application/TraitementCourrier/';
  private _courrier: Courrier;
  private _courriers: Array<Courrier>;
  private _consigne: ConsigneCourrier;
  private _traitement: TraitementCourrier;
  private _index: number;
  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  public addCourrier() {
    this.courrier.consignes.push(this.cloneConsigne(this.consigne));
    this.courrier.traitements.push(this.cloneTraitement(this.traitement));
  }
  // tslint:disable-next-line:typedef
  private cloneCourrier(courrier: Courrier) {
    const cloneC = new Courrier();
    cloneC.id = courrier.id;
    cloneC.typeCourrier = courrier.typeCourrier;
    cloneC.coordinateur = courrier.coordinateur;
    cloneC.sousDossier = courrier.sousDossier;
    cloneC.ref = courrier.ref;
    cloneC.annee = courrier.annee;
    cloneC.indice = courrier.indice;
    cloneC.numOrder = courrier.numOrder;
    cloneC.dateCourrier = courrier.dateCourrier;
    cloneC.dateBureauOrdre = courrier.dateBureauOrdre;
    cloneC.objet = courrier.objet;
    cloneC.sousTheme = courrier.sousTheme;
    cloneC.categorieCourrier = courrier.categorieCourrier;
    cloneC.expediteur = courrier.expediteur;
    cloneC.typeExpediteur = courrier.typeExpediteur;
    return cloneC;
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
  // tslint:disable-next-line:typedef
  private cloneTraitement(Traitement: TraitementCourrier) {
    const cloneTra = new TraitementCourrier();
    cloneTra.libelle = Traitement.libelle;
    cloneTra.dateTraitement = Traitement.dateTraitement;
    cloneTra.responsable = Traitement.responsable;
    cloneTra.entiteAdmin = Traitement.entiteAdmin;
    return cloneTra;
  }


  // tslint:disable-next-line:typedef
  public save() {
    if (this.courrier.id == null) {
      const cour = this.cloneCourrier(this.courrier);
      this.http.post(this._urlBase + this._url + '/', this.courrier).subscribe(
        data => {
          if (data > 0) {
            console.log(this.courrier);
            this.courriers.push(cour);
          } else  {
            alert('echec !!' + data);
          }
        }
      );
    }else {
      this.http.put(this._urlBase + this._url + '/', this.courrier).subscribe(

        data => {
          this.courriers[this._index] = this.courrier;
        }
      );
    }
    this.courrier = null ;
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

  get consigne(): ConsigneCourrier {
    return this._consigne;
  }

  set consigne(value: ConsigneCourrier) {
    this._consigne = value;
  }

  get traitement(): TraitementCourrier {
    return this._traitement;
  }

  set traitement(value: TraitementCourrier) {
    this._traitement = value;
  }

}
