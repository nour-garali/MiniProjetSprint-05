import { Component, OnInit } from '@angular/core';
import { Enseignant } from '../model/enseignant.model';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {
  newEnseignant: Enseignant = new Enseignant();

  ngOnInit() {
    // You can also initialize the property here if needed
  }

  addEnseignant(){
    console.log(this.newEnseignant);
    }
    

}
