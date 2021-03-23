import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterReporte'
})
export class FilterReportePipe implements PipeTransform {

  transform(value: any,arg: any): any {
    const resultado=[];
    for(const dato of value){
      if(
        (dato.componente.toLowerCase().indexOf(arg.toLowerCase())> -1) ||
        (dato.posicion.toLowerCase().indexOf(arg.toLowerCase())> -1)
                )
      {
     resultado.push(dato); 
     };
    };
 //   console.log(resultado.length);
    return resultado; 
   
  }

}
