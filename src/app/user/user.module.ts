import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    FormsModule,
    CommonModule
  ],
  exports:[
    LoginComponent
  ]
})
export class UserModule { }
