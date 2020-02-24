import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {ExperiencesComponent} from './experiences/experiences.component';
import {FormationsComponent} from './formations/formations.component';


const routes: Routes = [
  { path: '', component:HomeComponent},
  {path: 'experiences', component:ExperiencesComponent},
   {path: 'formations', component:FormationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
