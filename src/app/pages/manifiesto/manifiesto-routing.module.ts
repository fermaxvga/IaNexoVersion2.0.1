import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'; 
import { ManifiestoNewComponent } from './components/manifiesto-new/manifiesto-new.component';
import { ManifiestoListComponent } from './components/manifiesto-list/manifiesto-list.component';
import { ManifiestoModifyComponent } from './components/manifiesto-modify/manifiesto-modify.component';
import { ManifiestoHomeComponent } from './components/manifiesto-home/manifiesto-home.component';
import { ManifiestoDetailComponent } from './components/manifiesto-detail/manifiesto-detail.component';


const routes: Routes=[
  {
    path:'',
    children:[
      {path:'home',component:ManifiestoHomeComponent},
      {path:'nuevo',component:ManifiestoNewComponent},
      {path:'listado', component:ManifiestoListComponent},
      {path:'modificar',component:ManifiestoModifyComponent},
      {path:'detail/:id',component:ManifiestoDetailComponent},
      {path:'**',redirectTo:'home'}
    ]
  }
]



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManifiestoRoutingModule { }
