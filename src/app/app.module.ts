import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }			      	from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
/* Componentes */
import { AppComponent } from './app.component';
/*Modulos*/
import { UserModule } from './user/user.module';
import { TemplateModule } from './template/template.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeModule } from './pages/home/home.module';
import { ManifiestoModule } from './pages/manifiesto/manifiesto.module';
import { ProcedimientosModule } from './pages/procedimientos/procedimientos.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReportesModule } from './pages/reportes/reportes.module';


// import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UserModule,
    TemplateModule,
    FormsModule,
    FontAwesomeModule,
    HomeModule,
    ManifiestoModule,
    ProcedimientosModule,
    ReportesModule,
    BrowserAnimationsModule,
    // MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
