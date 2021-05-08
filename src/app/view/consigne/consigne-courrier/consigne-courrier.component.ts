import {Component, OnInit} from '@angular/core';
import {CourrierService} from '../../../controller/service/courrier.service';
import {ConsigneCourrierService} from '../../../controller/service/consigne-courrier.service';
import {ConsigneCourrier} from '../../../controller/model/consigne-courrier.model';

@Component({
  selector: 'app-consigne-courrier',
  templateUrl: './consigne-courrier.component.html',
  styleUrls: ['./consigne-courrier.component.css']
})
export class ConsigneCourrierComponent implements OnInit {

  constructor(private consigneCourrierService: ConsigneCourrierService) {
  }
  ngOnInit(): void {
  }
  get consigneCourrier(): ConsigneCourrier {
    return this.consigneCourrierService.consigneCourrier;
  }
}
