import { Component, OnInit } from '@angular/core';
import {CourrierService} from '../../../controller/service/courrier.service';
import {Courrier} from '../../../controller/model/courrier.model';

@Component({
  selector: 'app-liste-courrier',
  templateUrl: './liste-courrier.component.html',
  styleUrls: ['./liste-courrier.component.css']
})
export class ListeCourrierComponent implements OnInit {

  constructor(private courrierService: CourrierService) { }

  ngOnInit(): void {
  }

  get courrier(): Courrier {
    return this.courrierService.courrier;
  }

  get courriers(): Array<Courrier> {
    return this.courrierService.courriers;
  }
}
