import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { UserModule } from '../user/user.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from '../app-routing.module';






@NgModule({
  declarations: [ToolbarComponent, SideBarComponent, FooterComponent],
  imports: [
    CommonModule,
    UserModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  exports:[
    ToolbarComponent,
    SideBarComponent,
    FooterComponent
  ]
})
export class TemplateModule { }
