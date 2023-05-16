import { Injectable } from '@angular/core';
import { Enseignant } from '../model/enseignant.model';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  enseignants: Enseignant[];
  enseignant!: Enseignant;

  constructor() {
    this.enseignants = [
      { idEnseignant: 1, nomEnseignant: 'nour', villeEnseignant: 'tunis', dateNaissance: new Date('01/14/2011'), salaire: 3000.600 },
      { idEnseignant: 2, nomEnseignant: 'chadha', villeEnseignant: 'tunis', dateNaissance: new Date('01/14/2011'), salaire: 3000.600 },
      { idEnseignant: 3, nomEnseignant: 'loua', villeEnseignant: 'tunis', dateNaissance: new Date('01/14/2011'), salaire: 3000.600 }
    ];
  }

  listeEnseignants(): Enseignant[] {
    return this.enseignants;
  }

  ajouterEnseignant(ens: Enseignant): void {
    this.enseignants.push(ens);
  }

  supprimerEnseignant(e: Enseignant): void {
    const index = this.enseignants.indexOf(e);
    if (index > -1) {
      this.enseignants.splice(index, 1);
    }
  }

  consulterEnseignant(id: number): Enseignant | undefined {
    this.enseignant = this.enseignants.find(e => e.idEnseignant === id)!;
    return this.enseignant;
  }

  updateEnseignant(e:Enseignant)
{
// console.log(p);
this.supprimerEnseignant(e);
this.ajouterEnseignant(e);
}

}
