import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from 'src/app/shared/models/global';
import { Procedimiento } from '../model/procedimientos';




@Injectable({
  providedIn: 'root'
})
export class ProcedimientosService {
  url: string;
  reload = new EventEmitter<boolean>();


  constructor(
    public _http: HttpClient
  ) {

    this.url = GLOBAL.url
  }

  getCategorias(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get(this.url + 'proCategorias', { headers: headers })
  }

  getSubCategorias(id: number): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get(this.url + 'proSubCategorias/' + id, { headers: headers })
  }

  getProcedimientos(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get(this.url + 'posts', { headers: headers });
  }

  getContenido(id): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get(this.url + 'post/' + id, { headers: headers });
  }

  addTag(tag): Observable<any> {
    console.log(tag);
   let json=JSON.stringify(tag);
   let params="json="+json; 
   console.log(json);
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.post(this.url + 'tag',params, { headers: headers });
  }


  onUpload(usuario: any, file, post: Procedimiento): Observable<any> {
    const fd = new FormData;
    console.log(file);
    fd.append('pdf', file, file.name);
    let post_json = JSON.stringify(post);
    console.log('post' + post_json);
    let user = JSON.stringify(usuario);
    fd.append('post', post_json);
    fd.append('usuario', user);
    console.log('usuario' + user);
    console.log("FORM DATA ");
    console.log(fd);
    let headers = new HttpHeaders().set('Content-Type', 'multipart/form-data');

    return this._http.post(this.url + 'new-post', fd);
  }

  editar(usuario:any , file, post:Procedimiento): Observable<any> {
    const fd = new FormData;
        
      console.log(file);
      if(file){
        fd.append('pdf', file, file.name);
      }
       
    
    let post_json = JSON.stringify(post);
    let user = JSON.stringify(usuario);
    fd.append('post', post_json);
    fd.append('usuario', user);
    console.log("FORM DATA ");
    console.log(fd);

  // let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.post(this.url+'post-update',fd);
  }

  historial(id:number):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get(this.url + 'post-historial/' + id, { headers: headers });
  }

  filtrar(id:number):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get(this.url + 'post-filtar/'+id, { headers: headers });
   
  }
  
  tag_post(id:number):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get(this.url + 'post-myTag/'+id, { headers: headers });
  }

  filtarConArreglo(categorias):Observable<any>{
    
    let json=JSON.stringify(categorias); 
    let params="json="+json;
   // console.log('Parmatros'+params);
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.post(this.url+'filtrar-arreglo',params, { headers: headers });
 
 }

}

