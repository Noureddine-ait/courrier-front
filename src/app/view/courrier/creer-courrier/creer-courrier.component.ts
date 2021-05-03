import {Component, OnInit} from '@angular/core';
import {CourrierService} from '../../../controller/service/courrier.service';
import {Courrier} from '../../../controller/model/courrier.model';

@Component({
  selector: 'app-creer-courrier',
  templateUrl: './creer-courrier.component.html',
  styleUrls: ['./creer-courrier.component.css']
})
export class CreerCourrierComponent implements OnInit {
  constructor(private courrierService: CourrierService) {
  }
  ngOnInit(): void {
  }
  get courrier(): Courrier {
    return this.courrierService.courrier;
  }
}
