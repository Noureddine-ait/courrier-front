import {Component, OnInit} from '@angular/core';
import {ConsigneCourrierService} from '../../../controller/service/consigne-courrier.service';
import {ConsigneCourrier} from '../../../controller/model/consigne-courrier.model';

@Component({
  selector: 'app-consigne-list',
  templateUrl: './consigne-list.component.html',
  styleUrls: ['./consigne-list.component.css']
})
export class ConsigneListComponent implements OnInit {
  constructor(private consigneCourrierService: ConsigneCourrierService) {
  }

  ngOnInit(): void {
  }

  get consigneCourriers(): Array<ConsigneCourrier> {
    return this.consigneCourrierService.consigneCourriers;
  }
  get consigneCourrier(): ConsigneCourrier {
    return this.consigneCourrierService.consigneCourrier;
  }
}
