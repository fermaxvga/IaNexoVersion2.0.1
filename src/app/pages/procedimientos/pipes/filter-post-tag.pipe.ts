import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPostTag'
})
export class FilterPostTagPipe implements PipeTransform {

  transform(value: any,arg:any): any {
    const resultado = [];
    for (const post of value) {
     // console.log(post);
        if (
          (post.post.titulo.toLowerCase().indexOf(arg.toLowerCase()) > -1)
          // ,
           //(post.post.comentario.toLowerCase().indexOf(arg.toLowerCase()) > -1)
          // ,
          //  (post.post.documento.toLowerCase().indexOf(arg.toLowerCase()) > -1)
        ) 
       {
         console.log('buscando...');
         resultado.push(post);
       }

    }
    return resultado;

  }

}
