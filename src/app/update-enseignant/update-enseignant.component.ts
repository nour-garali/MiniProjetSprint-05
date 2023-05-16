import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EnseignantService } from '../services/enseignant.service';
import { Enseignant } from '../model/enseignant.model';

@Component({
  selector: 'app-update-enseignant',
  templateUrl: './update-enseignant.component.html',
  styles: []
})
export class UpdateEnseignantComponent implements OnInit {
  currentEnseignant: Enseignant = new Enseignant();

  constructor(
    private activatedRoute: ActivatedRoute,
    private enseignantService: EnseignantService
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    const enseignant = this.enseignantService.consulterEnseignant(id);
    this.currentEnseignant = enseignant ? enseignant : new Enseignant();
    console.log(this.currentEnseignant);
  }

  updateEnseignant() {
    if (this.currentEnseignant) {
      this.enseignantService.updateEnseignant(this.currentEnseignant);
    }
  }
}
