import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from 'src/app/shared/models/global';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {
  url: string;


  constructor(    
    public _http: HttpClient
    ) 
    {
      this.url=GLOBAL.url; 
     }

     getReportesPn(pn: string): Observable<any> {
      let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      return this._http.get(this.url + 'part-number', { headers: headers })
    }

    getDatos(barcodes):Observable<any>{
      console.log('en servicio');
      let json=JSON.stringify(barcodes);
      let params="json="+json; 
      console.log(params);
      let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      return this._http.post(this.url + 'datos-pcb', params,{ headers: headers })
    }

    getReporte(datos):Observable<any>{
      console.log(datos);
      let json=JSON.stringify(datos);
      let params="json="+json;
      console.log(params);
      let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      return this._http.post(this.url + 'part-numbers', params,{ headers: headers })
    }
    getOpciones(datos):Observable<any>{
      console.log(datos);
      let json=JSON.stringify(datos);
      let params="json="+json;
      console.log(params);
      let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
      return this._http.post(this.url + 'reporte-filtro', params,{ headers: headers })
    }
}
