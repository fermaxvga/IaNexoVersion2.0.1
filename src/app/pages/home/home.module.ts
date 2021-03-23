import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { HomeComponent } from './home.component';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FontAwesomeModule
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
