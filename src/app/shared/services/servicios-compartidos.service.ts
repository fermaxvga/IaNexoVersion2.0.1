import { Injectable } from '@angular/core';
// Aqui se guardan funciones que se utilziarán en todo el proyecto
@Injectable({
  providedIn: 'root'
})
export class ServiciosCompartidosService {

  constructor() { }

  formatearFecha(fecha){
    //a partir de un dato del tipo datetime , como created_at o updated_at, devuelve un arreglo, separando año, día, mes hora y minutos.
    let year=fecha.substring(0,4);
    let month=fecha.substring(5,7);
    let day=fecha.substring(8,10);
    let hour=fecha.substring(11,13);
    let minutes=fecha.substring(14,16);
    let date={year,month,day,hour,minutes}; 
    return date; 
  }

  validarFormato(fileName) {
    //valida si el formato de un archivo es un PDF. Recibe el nombre del archivo tipo string
    let format = fileName.slice((fileName.lastIndexOf(".") - 1 >>> 0) + 2);
    if (format === 'pdf') {
      console.log('formato ', format);
      return true;
    } else {
      return false;
    }
  }

  fileSize(size){
    //calcula el tamaño de un archivo en Bytes, Kb, Mb. Recibe el tamaño del archivo en bytes
    if(size<1024){
      let b=size;
      let bytes=b.toFixed(2)+'Bytes';
      return bytes; 
      //console.log(size +'Bytes');
    }else{
            let kb=(size/1024);
            if(kb>=1024){
              let mb=kb/1024;
              let megaBytes=mb.toFixed(2)+' MB'; 
    //          console.log(megaBytes);
              return megaBytes;
            }else{
        //      console.log(kb + 'kB');
              let kiloBytes=kb.toFixed(2)+' kB';
      //        console.log(kiloBytes);
              return kiloBytes;  
            }
        }
  }
}
