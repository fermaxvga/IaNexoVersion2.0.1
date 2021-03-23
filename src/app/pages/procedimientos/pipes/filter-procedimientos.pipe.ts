import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProcedimientos'
})
export class FilterProcedimientosPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultProcedimiento = [];
    for (const post of value) {
      console.log(post);
      if (
        (post.titulo.toLowerCase().indexOf(arg.toLowerCase()) > -1)
        //,
      //   (post.comentario.toLowerCase().indexOf(arg.toLowerCase()) > -1)
         //,
        // (post.documento.toLowerCase().indexOf(arg.toLowerCase()) > -1)
      ) {
        console.log('buscando...');
        resultProcedimiento.push(post);
      }
    }
    return resultProcedimiento;
  }

}
