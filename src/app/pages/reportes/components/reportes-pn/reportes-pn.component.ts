import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ReportesService } from '../../services/reportes.service';


@Component({
  selector: 'app-reportes-pn',
  templateUrl: './reportes-pn.component.html',
  styleUrls: ['./reportes-pn.component.css']
})
export class ReportesPnComponent implements OnInit {
  search=faSearch;
  partNumber:any; 

  constructor(
    private _reportes: ReportesService
  ) { }

  ngOnInit(): void {
  }

  // getReportes(partNumber){
  //   this._reportes.getReportesPn(partNumber).subscribe(
  //     response=>{
  //       if(response.status=="success"){
  //         console.log(response);
  //       }else{
  //         console.log('no se pude traer los reportes');
  //       }
  //     }, 
  //     error=>{
  //       console.log(<any>error);
  //     }
  //     );
  //   }
}
