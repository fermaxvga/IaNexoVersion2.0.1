import { Component, OnInit } from '@angular/core';
import { faCheck, faMinusCircle, faSearch, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { ReportesService } from '../../services/reportes.service';
import {faArrowAltCircleDown} from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-reportes-scrap',
  templateUrl: './reportes-scrap.component.html',
  styleUrls: ['./reportes-scrap.component.css']
})
export class ReportesScrapComponent implements OnInit {
  
  barCode;
  barCodeArray;
  count:number;
  invalido:boolean;
  vacio:boolean;
  enviando: boolean;
  datos: any;
  datosReporte:any;
  
  reporte: any;
  reportError:any; 
  
  in=faArrowAltCircleDown;
  trash=faTrashAlt;
  check=faCheck;
  minusCircle=faMinusCircle;
  pedirReporte: boolean;
  paneles_option: any;
  procesos_option: any;
  dato: any;
  showReporte: any;
  logop: any;
  options_procesos:any;
  panel_filtro:any;
  proceso_filtro:any;
  verListado: boolean;
  habilitarBoton: boolean;
  fileName:string;
  

  constructor(
    private _reportes: ReportesService
  ) {
    this.barCodeArray=[];
    this.datosReporte={}; 
    this.invalido=false; 
    this.reportError=false; 
    this.paneles_option=[];
    this.logop=[];
    this.verListado=false; 
    this.habilitarBoton=false;
    
  }

  ngOnInit(): void {
    var f=new Date();
    console.log(f);
    this.fileName='reporte'+f.getDate()+f.getMonth()+f.getFullYear()+f.getHours()+f.getMinutes()+f.getSeconds()+'.xlsx';
  
  }

  onSubmit(form){
    this.invalido=false; 
    this.vacio=false; 
    console.log(form.value.pcbCode);
    if(form.value.pcbCode!=null){
  
     var codigo=form.value.pcbCode;
      
      codigo=String(codigo);
      let regularExpress=/^[0-9]+$/;
      //    console.log(codigo.match(regularExpress));
      
      if(codigo.match(regularExpress)){
        if(codigo.length==10){
          this.barCodeArray.push(codigo);
        }else{
          this.invalido=true;
        }
      }else{
        this.invalido=true;
      }
    }else{
      this.vacio=true;
    }
    
  
  
  }

   quitarPlaca(barcode) {
  
     let index = this.barCodeArray.indexOf(barcode);
     this.barCodeArray.splice(index, 1);
     console.log(this.barCodeArray);
   }

   enviarArray(array){
 this.enviando=true;
 this._reportes.getDatos(array).subscribe(
   response=>{
      if(response.status=='success'){
          console.log(response);
          this.barCodeArray=[];
          this.datos=response.datos;
          console.log(this.datos);
          this.enviando=false;
        }
       }
       ,error=>{
           console.log(<any>error);
         }
         );
   }
   limpiar(){
    this.datos=null; 
   }

   verReporte(dato){
     this.pedirReporte=true;
    console.log(dato);
    let modelo=dato[0].modelo;
    console.log(modelo);
    let lote=dato[0].lote;
    console.log(lote);
    this.datosReporte.modelo=modelo;
    this.datosReporte.lote=lote;
    console.log(this.datosReporte);
    this._reportes.getReporte(this.datosReporte).subscribe(
      response=>{
        if(response.status=='success'){
          console.log(response);
          this.reporte=response.reporte;
          console.log(this.reporte);
        }else{
          console.log('sin datos');
          this.reportError=true;
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
   }

   solicitarReporte(dato){
 
    console.log('solicitar reporte');
    console.log(dato);
    let modelo=dato[0].modelo;
    console.log(modelo);
    let lote=dato[0].lote;
    let semi=dato[0].semielaborado;
    console.log(lote);
    this.datosReporte.barcode=dato.barcode;
    this.datosReporte.modelo=modelo;
    this.datosReporte.lote=lote;
    this.datosReporte.semi=semi; 
    console.log(this.datosReporte);
    this._reportes.getOpciones(this.datosReporte).subscribe(
      response=>{
        if(response.status=='success'){
          console.log(response);
          this.paneles_option=response.panel;
          this.procesos_option=response.proceso;
          this.reporte=response.reporte;
       //   this.showReporte=this.reporte;
        }else{
          console.log('sin datos');
          this.reportError=true;
        }
      },
      error=>{
        console.log(<any>error);
      }
    )
   
   }

   
   filtro(event,filtro) {
     this.habilitarBoton=false; 
    this.showReporte=[];
     console.log(event.target.checked);
     console.log(filtro);
     this.panel_filtro=filtro;
     
     if(event.target.checked==true){
       let asignaciones=[];
       let opciones=[];
       let j=0;
       let n=0;
       for(let i = 0; i < this.reporte.length; i++){
         if(filtro==this.reporte[i].logop){
           asignaciones[j]=this.reporte[i].asignacion;
           
           j++            
          }
        }
        for (let l = 0; l < this.procesos_option.length; l++) {
          for (let m = 0; m < asignaciones.length; m++) {
            
            if(this.procesos_option[l].asignacion==asignaciones[m]){
              console.log(this.procesos_option[l].asignacion);
              opciones[n]=asignaciones[m];
              n++;
            }
            
          }
        }
        this.options_procesos=opciones.filter(
          (item,index)=> {
            return opciones.indexOf(item)===index;
          }
          );
          console.log(this.options_procesos);
          //   console.log(asignaciones);
          
        }
      }

      filtro2(event,filtro){
        this.verListado=true;
       this.showReporte=[];
       this.habilitarBoton=true;
       console.log(event.target.checked);
       this.proceso_filtro=filtro;
       console.log(this.proceso_filtro);
       let j=0;
       for (let i = 0; i < this.reporte.length; i++) {
           if(this.reporte[i].logop===this.panel_filtro && this.reporte[i].asignacion===this.proceso_filtro){
             this.showReporte[j]=this.reporte[i];
             j++; 
           }
       }
       console.log(this.showReporte);
      }

      showListado(){
        if(this.verListado==false){
          this.verListado=true;
        }else {
          if(this.verListado==true){
            this.showReporte=[];
            this.options_procesos=null;
            this.verListado=false;
          }
        } 
        
        console.log(this.verListado);
        
      }

      exportarExcel(){
        console.log('exportarExcel');
        /* pasar tabla*/
        let element =document.getElementById("reporte");
        const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
        // Generar WorkBOOK
        const wb:XLSX.WorkBook=XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb,ws,"Hoja1");
        // GuardarArchivo
        XLSX.writeFile(wb,this.fileName);
      }
      
      filterReporte='';
      pActual: number = 1; 
    }
    
    