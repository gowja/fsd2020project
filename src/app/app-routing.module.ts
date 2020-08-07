import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondComponent } from './second/second.component';
import { Second1Component } from './second1/second1.component';
import { AddpersonalComponent } from './addpersonal/addpersonal.component';
import { AddmarkComponent } from './addmark/addmark.component';
import { PdetailComponent } from './pdetail/pdetail.component';
import { MdetailComponent } from './mdetail/mdetail.component';
import { EditpComponent } from './editp/editp.component';


const routes: Routes = [
  {path:'personal',component:SecondComponent},
  {path:'mark',component:Second1Component},
  {path:'addp',component:AddpersonalComponent},
  {path:'addm',component:AddmarkComponent},
  {path:'pdetail',component:PdetailComponent},
  {path:'mdetail',component:MdetailComponent},
  {path:'editp',component:EditpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
