import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportesRoutingModule } from './reportes-routing.module';
import { ReportesPnComponent } from './components/reportes-pn/reportes-pn.component';
import { ReportesHomeComponent } from './components/reportes-home/reportes-home.component';
import { ReportesToolbarComponent } from './components/reportes-toolbar/reportes-toolbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { ReportesScrapComponent } from './components/reportes-scrap/reportes-scrap.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReportesScrapAuxComponent } from './components/reportes-scrap-aux/reportes-scrap-aux.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterReportePipe } from './pipes/filter-reporte.pipe';
import * as XLSX from 'xlsx';





@NgModule({
  declarations: [ReportesPnComponent,
    ReportesHomeComponent,
    ReportesToolbarComponent,
    ReportesScrapComponent,
    ReportesScrapAuxComponent,
    FilterReportePipe,
  ],
  imports: [
    CommonModule,
    ReportesRoutingModule,
    FontAwesomeModule,
    FormsModule,
    SharedModule,
    NgxPaginationModule
  ],
  exports: [
    ReportesPnComponent,
    ReportesHomeComponent,
    ReportesToolbarComponent,
    ReportesScrapComponent,
    ReportesScrapAuxComponent
  ]
})
export class ReportesModule { }
