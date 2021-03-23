import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcedimientosRoutingModule } from './procedimientos-routing.module';


import { ProcedimientosListComponent } from './components/procedimientos-list/procedimientos-list.component';
import { ProcedimientosNewComponent } from './components/procedimientos-new/procedimientos-new.component';
import { ProcedimientosHomeComponent } from './components/procedimientos-home/procedimientos-home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { ProcedimientosDetailComponent } from './components/procedimientos-detail/procedimientos-detail.component';
import { ProcedimientosEditComponent } from './components/procedimientos-edit/procedimientos-edit.component';
import { FilterProcedimientosPipe } from 'src/app/pages/procedimientos/pipes/filter-procedimientos.pipe';
import { FilterPostTagPipe } from 'src/app/pages/procedimientos/pipes/filter-post-tag.pipe';
import { ProcedimientosToolbarComponent } from './components/procedimientos-toolbar/procedimientos-toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ProcedimientosListComponent, 
    ProcedimientosNewComponent, 
    ProcedimientosHomeComponent,  
    ProcedimientosDetailComponent, 
    ProcedimientosEditComponent, 
    FilterProcedimientosPipe, 
    FilterPostTagPipe, ProcedimientosToolbarComponent
  ],
  imports: [
    CommonModule,
    ProcedimientosRoutingModule,
    FontAwesomeModule,
    FormsModule,
    SharedModule
  ],
  exports:[
    ProcedimientosListComponent, 
    ProcedimientosNewComponent,
    ProcedimientosHomeComponent,
    ProcedimientosDetailComponent,
    ProcedimientosEditComponent,
    ProcedimientosToolbarComponent
  ]
})
export class ProcedimientosModule { }
