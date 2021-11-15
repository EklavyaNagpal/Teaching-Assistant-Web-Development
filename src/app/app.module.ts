import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseContentDevComponent } from './course-content-dev/course-content-dev.component';
import { HomeComponent } from './home/home.component';
import { ConceptComponent } from './concept/concept.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { CoursesComponent } from './courses/courses.component';
import { SubconceptComponent } from './subconcept/subconcept.component';
import { SessionplanComponent } from './sessionplan/sessionplan.component';

// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    //  BrowserAnimationsModule,
    CourseContentDevComponent,
    HomeComponent,
    ConceptComponent,
    CurriculumComponent,
    CoursesComponent,
    SubconceptComponent,
    SessionplanComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
