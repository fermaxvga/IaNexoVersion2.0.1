import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params, ActivationEnd } 				from '@angular/router'; 
import { GLOBAL } from 'src/app/shared/models/global';
import { ServiciosCompartidosService } from 'src/app/shared/services/servicios-compartidos.service';
import { ProcedimientosService } from '../../service/procedimientos.service';
import { UserService } from 'src/app/user/services/user.service';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { HistoricoProcess } from '../../model/historicoProcess';




@Component({
  selector: 'app-procedimientos-detail',
  templateUrl: './procedimientos-detail.component.html',
  styleUrls: ['./procedimientos-detail.component.css']
})
export class ProcedimientosDetailComponent implements OnInit, DoCheck {
  token;
  identity;
  post: any;
  fecha_creacion: any;
  fecha_modif:any;
  documento:any;
  url:string;
  filePdf = faFilePdf;
  tags;
  formato: boolean = true;
  id;
  historial;
  historicoProcess;
  verHistorial: boolean=false;

  
  constructor(
    private _procedimientos: ProcedimientosService,
    private _route: ActivatedRoute,
    private _compartidos: ServiciosCompartidosService,
    private _userService: UserService

  ) {
    this.url = GLOBAL.storage;
  }

  ngOnInit(): void {
    //recuperamos el id desde la url. 
    this._route.params.subscribe(params=>{
      this.id=+params['id'];
      console.log(this.id);
      //traemos el contenido del post correspondiente al id
      this._procedimientos.getContenido(this.id).subscribe(
        response=>{
          if(response.status=="success"){
            console.log(response);
            this.post=response.post[0];
            this.documento=response.documento;
            this.tags=response.tags;
          //  console.log(this.tags[0].sub_cat.subcategoria); 
            console.log(this.documento);
             this.fecha_creacion=this._compartidos.formatearFecha(this.post.created_at);
             this.fecha_modif=this._compartidos.formatearFecha(this.post.updated_at);
          }
        },
        error=>{
          console.log(<any>error);
        }
      );
   })
  }

  getHistorial(){
    if(this.verHistorial==true){
      this.verHistorial=false;
    }else{
      if(this.verHistorial==false){
        this.verHistorial=true; 
      this.historicoProcess=new HistoricoProcess('','',''); 
      console.log('verHistorial');
      this._procedimientos.historial(this.id).subscribe(
        response=>{
          if(response.status=='success'){
            console.log(response);
            this.historial=response.historial; 
            for (let i = 0; i < this.historial.length; i++) {
              this.historial[i].created_at=this._compartidos.formatearFecha(this.historial[i].created_at);
              this.historial[i].documento_size=this._compartidos.fileSize(this.historial[i].documento_size);
              //console.log(this._compartidos.fileSize(this.historial[i].documento_size));
            }
            console.log(this.historial);
          }else{
            console.log('no se pudo traer el historial');
          }
        },
        error=>{
          console.log(<any>error);
          
        }
        );
      }
    }
  }

  ngDoCheck(){
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }



}
