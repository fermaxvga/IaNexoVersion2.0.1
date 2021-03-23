import { Injectable } 				from '@angular/core';
import { HttpClient, HttpHeaders } 	from '@angular/common/http'; 
import { Observable, Subject }		from 'rxjs';
import { GLOBAL } from 'src/app/shared/models/global';
import { Manifiesto } from '../model/manifiesto';

@Injectable({
  providedIn: 'root'
})
export class ManifiestoService {
	public url: string;

constructor(
	public _http: HttpClient
	) { 
		this.url = GLOBAL.url;
		}


		

		datos(op):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
			return this._http.get(this.url+'datos/'+ op,{headers: headers});	
		}

		

		consulta_pcb(modelo, lote, panel):Observable<any>{
			let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
			return this._http.get(this.url+'ingenieria/'+modelo+'/'+lote+'/'+panel,{headers: headers});
		}

		ubicacion_stencil(stenciles):Observable<any>{
			let json=JSON.stringify(stenciles);
			let params = "json="+json;
			console.log("En el Servicio de Ubicación de Stenciles"); 
			console.log('Parametros'+params); 

			let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
											
			return  this._http.post(this.url+'ubicacion-stencil',params,{headers: headers});

		}


		lineas():Observable<any>{
			let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
			return this._http.get(this.url+'configuracion-lineas',{headers: headers});
		}

		dual(linea):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
			return this._http.get(this.url+'configuracion-lineas/'+linea,{headers: headers});	
		}
		config(linea):Observable<any>{
		let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
			return this._http.get(this.url+'configuracion-linea/'+linea,{headers: headers});	
		}

		consumibles():Observable<any>{
			let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
			return this._http.get(this.url+'consumibles',{headers: headers});
		}

		create(token:any ,manifiesto: Manifiesto):Observable<any>{

			let json=JSON.stringify(manifiesto); 
				
			let params = "json="+json;

			console.log('Parametros'+params);


			let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
									   	.set('Authorization',token);
			return this._http.post(this.url+'manifiesto',params,{headers: headers});

						
		}

		getManifiestos():Observable<any>{
			let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
					return this._http.get(this.url+'manifiesto',{headers: headers});

		}
		getManifiesto(id):Observable<any>{
				let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
					    		return this._http.get(this.url + 'manifiesto/'+id,{headers: headers}); 
		}

		update(token, manifiesto:Manifiesto, id): Observable<any>{
			let json=JSON.stringify(manifiesto); 
			let params = "json="+json;
			console.log('Parametros'+params); 
			let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded') 
											   .set('Authorization',token); 
			return this._http.put(this.url+'manifiesto/'+id,params,{headers: headers});
		}

		buscar_repetido(op):Observable<any>{
			console.log(op + 'en servicio'); 
		let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
					    		return this._http.get(this.url + 'repetido/'+op,{headers: headers}); 	
		}

		getModelos():Observable<any>{
			let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
			return this._http.get(this.url + 'modelos',{headers: headers}); 

		}

		getLotes(modelo):Observable<any>{
			let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
			return this._http.get(this.url + 'lotes/'+modelo,{headers: headers}); 
		}

		getPaneles(modelo,lote):Observable<any>{
			let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
			return this._http.get(this.url + 'paneles/'+modelo+'/'+lote,{headers: headers}); 
		}

		getOp(modelo,lote,panel):Observable<any>{
			let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
			return this._http.get(this.url + 'op/'+modelo+'/'+lote+'/'+panel,{headers: headers});
		}


				
}
