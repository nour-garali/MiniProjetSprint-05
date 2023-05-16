import { Component, OnInit } from '@angular/core';
import { Enseignant } from '../model/enseignant.model';
import { EnseignantService } from '../services/enseignant.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  enseignants: Enseignant[] = [];
  newEnseignant = new Enseignant();

  constructor(private enseignantService: EnseignantService) {}

  addEnseignant(): void {
    this.enseignantService.ajouterEnseignant(this.newEnseignant);
    this.newEnseignant = new Enseignant();
  }

  supprimerEnseignant(e: Enseignant) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
      this.enseignantService.supprimerEnseignant(e);
  }

  ngOnInit(): void {
    // Code à exécuter lors de l'initialisation du composant
    this.enseignants = [
      { idEnseignant: 1, nomEnseignant: "nour", villeEnseignant: "tunis", dateNaissance: new Date("01/14/2011"), salaire: 3000.600 },
      { idEnseignant: 2, nomEnseignant: "chadha", villeEnseignant: "tunis", dateNaissance: new Date("01/14/2011"), salaire: 3000.600 },
      { idEnseignant: 3, nomEnseignant: "loua", villeEnseignant: "tunis", dateNaissance: new Date("01/14/2011"), salaire: 3000.600 },
    ];
  }
}
