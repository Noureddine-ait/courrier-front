import {Component, OnInit} from '@angular/core';
import {TraitementCourrierService} from '../../../controller/service/traitement-courrier.service';
import {TraitementCourrier} from '../../../controller/model/traitement-courrier.model';

@Component({
  selector: 'app-list-traitement',
  templateUrl: './list-traitement.component.html',
  styleUrls: ['./list-traitement.component.css']
})
export class ListTraitementComponent implements OnInit {


  constructor(private traitementCourrierService: TraitementCourrierService) {
  }

  ngOnInit(): void {
  }

  get traitementCourrier(): TraitementCourrier {
    return this.traitementCourrierService.traitementCourrier;
  }

  get traitementCourrierServices(): Array<TraitementCourrier> {
    return this.traitementCourrierService.traitementCourriers;
  }
}
