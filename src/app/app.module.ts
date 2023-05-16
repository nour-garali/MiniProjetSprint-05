import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TeachersComponent } from './teachers/teachers.component';
import { RouterModule } from '@angular/router';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { FormsModule } from '@angular/forms';
import { UpdateEnseignantComponent } from './update-enseignant/update-enseignant.component';



@NgModule({
  declarations: [
    AppComponent,
    
    TeachersComponent,
         AddTeacherComponent,
         UpdateEnseignantComponent,
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
