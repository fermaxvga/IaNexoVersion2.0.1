import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcedimientosDetailComponent } from './components/procedimientos-detail/procedimientos-detail.component';
import { ProcedimientosEditComponent } from './components/procedimientos-edit/procedimientos-edit.component';
import { ProcedimientosHomeComponent } from './components/procedimientos-home/procedimientos-home.component';
import { ProcedimientosListComponent } from './components/procedimientos-list/procedimientos-list.component';
import { ProcedimientosNewComponent } from './components/procedimientos-new/procedimientos-new.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'nuevo',component:ProcedimientosNewComponent},
      {path:'listado',component: ProcedimientosListComponent},
      {path:'home',component:ProcedimientosHomeComponent},
      {path:'detail/:id',component:ProcedimientosDetailComponent},
      {path:'edit/:id',component:ProcedimientosEditComponent},
      {path:'**',redirectTo:'home'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcedimientosRoutingModule { }
