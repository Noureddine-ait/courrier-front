import {Component, OnInit} from '@angular/core';
import {ConsigneCourrier} from '../../../controller/model/consigne-courrier.model';
import {TraitementCourrier} from '../../../controller/model/traitement-courrier.model';
import {ConsigneCourrierService} from '../../../controller/service/consigne-courrier.service';
import {TraitementCourrierService} from '../../../controller/service/traitement-courrier.service';

@Component({
  selector: 'app-traitement-courrier',
  templateUrl: './traitement-courrier.component.html',
  styleUrls: ['./traitement-courrier.component.css']
})
export class TraitementCourrierComponent implements OnInit {

  constructor(private traitementCourrierService: TraitementCourrierService) {
}
ngOnInit(): void {}
  get traitementCourrier(): TraitementCourrier {
    return this.traitementCourrierService.traitementCourrier;
  }
}
