import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SecondComponent } from './second/second.component';
import { Second1Component } from './second1/second1.component';
import { FooterComponent } from './footer/footer.component';
import { LeftsidedivComponent } from './leftsidediv/leftsidediv.component';
import { AddpersonalComponent } from './addpersonal/addpersonal.component';
import { AddmarkComponent } from './addmark/addmark.component';
import { PdetailComponent } from './pdetail/pdetail.component';
import { MdetailComponent } from './mdetail/mdetail.component';
import { EditpComponent } from './editp/editp.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SecondComponent,
    Second1Component,
    FooterComponent,
    LeftsidedivComponent,
    AddpersonalComponent,
    AddmarkComponent,
    PdetailComponent,
    MdetailComponent,
    EditpComponent
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
