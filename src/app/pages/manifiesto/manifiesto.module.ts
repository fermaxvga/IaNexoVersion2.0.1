import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManifiestoRoutingModule } from './manifiesto-routing.module';
import { ManifiestoListComponent } from './components/manifiesto-list/manifiesto-list.component';
import { ManifiestoModifyComponent } from './components/manifiesto-modify/manifiesto-modify.component';
import { ManifiestoNewComponent } from './components/manifiesto-new/manifiesto-new.component';
import { ManifiestoHomeComponent } from './components/manifiesto-home/manifiesto-home.component';
import { ManifiestoToolbarComponent } from './components/manifiesto-toolbar/manifiesto-toolbar.component';
import { FilterManifiestoPipe } from './pipe/filter-manifiesto.pipe';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatSortModule} from '@angular/material/sort';
import { SharedModule } from 'src/app/shared/shared.module';
import { ManifiestoDetailComponent } from './components/manifiesto-detail/manifiesto-detail.component';



@NgModule({
  declarations: [ManifiestoListComponent, 
    ManifiestoModifyComponent, 
    ManifiestoNewComponent, 
    ManifiestoHomeComponent, 
    ManifiestoToolbarComponent,
    FilterManifiestoPipe,
    ManifiestoDetailComponent
  ],
  imports: [
    CommonModule,
    ManifiestoRoutingModule,
    FormsModule,
    NgxPaginationModule,
    MatSortModule,
    SharedModule
  ],
  exports:[
    ManifiestoListComponent, 
    ManifiestoModifyComponent, 
    ManifiestoNewComponent,  
    ManifiestoHomeComponent, 
    ManifiestoToolbarComponent,
    ManifiestoDetailComponent
  ]
})
export class ManifiestoModule { }
