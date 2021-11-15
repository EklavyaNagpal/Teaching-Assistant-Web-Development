import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseContentDevComponent} from './course-content-dev/course-content-dev.component'
import {HomeComponent} from './home/home.component'
import {ConceptComponent} from './concept/concept.component'
import {CurriculumComponent} from './curriculum/curriculum.component'
import {CoursesComponent} from './courses/courses.component'
import {SubconceptComponent} from './subconcept/subconcept.component'
import {SessionplanComponent} from './sessionplan/sessionplan.component'
const routes: Routes = [
  {path:'',component:HomeComponent},
  {
  path:'xyz',component:CourseContentDevComponent
},
{  path:'concept',component:ConceptComponent
},
{ path:'curriculum',component:CurriculumComponent
},
 {
   path:'courses',component:CoursesComponent
 },
 {
  path:'subconcept',component:SubconceptComponent
},
{
  path:'sessionplan',component:SessionplanComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
