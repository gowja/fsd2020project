import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondComponent } from './second/second.component';
import { Second1Component } from './second1/second1.component';


const routes: Routes = [
  {path:'personal',component:SecondComponent},
  {path:'mark',component:Second1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
