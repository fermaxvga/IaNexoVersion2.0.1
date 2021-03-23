import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportesHomeComponent } from './components/reportes-home/reportes-home.component';
import { ReportesPnComponent } from './components/reportes-pn/reportes-pn.component';
import { ReportesScrapComponent } from './components/reportes-scrap/reportes-scrap.component';


const routes: Routes = [
  {
         path:'',
         children:[
           {path:'part-number',component:ReportesPnComponent},
           {path:'scrap',component:ReportesScrapComponent},
    //       {path:'listado',component: ProcedimientosListComponent},
           {path:'home',component:ReportesHomeComponent},
    //       {path:'detail/:id',component:ProcedimientosDetailComponent},
    //       {path:'edit/:id',component:ProcedimientosEditComponent},
           {path:'**',redirectTo:'home'}
         ]
       }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportesRoutingModule { }


