import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeachersComponent } from './teachers/teachers.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { UpdateEnseignantComponent } from './update-enseignant/update-enseignant.component';


const routes: Routes = [
  { path: 'teachers', component: TeachersComponent },
  { path: 'add-teacher', component: AddTeacherComponent },
  { path: '', redirectTo: 'teachers', pathMatch: 'full' },
  { path: 'updateProduit/:id', component: UpdateEnseignantComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
