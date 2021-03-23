import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterManifiesto'
})
export class FilterManifiestoPipe implements PipeTransform {

  transform(value: any, arg: any): any {
	const resultManifiesto = [];

    for(const manifiesto of value){
    	if (
    		(manifiesto.op.toLowerCase().indexOf(arg.toLowerCase()) > -1)            || 
    		(manifiesto.modelo.toLowerCase().indexOf(arg.toLowerCase()) > -1) 	     || 
    		(manifiesto.lote.toLowerCase().indexOf(arg.toLowerCase()) > -1) 	     ||
    		(manifiesto.panel.toLowerCase().indexOf(arg.toLowerCase()) > -1)	     ||
    		//(manifiesto.linea.toLowerCase().indexOf(arg.toLowerCase()) > -1)         ||
    		(manifiesto.carril.toLowerCase().indexOf(arg.toLowerCase()) > -1)        ||
            (manifiesto.lado.toLowerCase().indexOf(arg.toLowerCase()) > -1)          ||
            (manifiesto.user.name.toLowerCase().indexOf(arg.toLowerCase()) > -1)     ||
            (manifiesto.user.surname.toLowerCase().indexOf(arg.toLowerCase()) > -1)  
            // ||
            // (manifiesto.created_at.toLowerCase().indexOf(arg.toLowerCase()) > -1)    ||
            // (manifiesto.updated_at.toLowerCase().indexOf(arg.toLowerCase()) > -1)    
    		){
    		console.log('buscando...manifiestos'); 
    		resultManifiesto.push(manifiesto);
    	};
    	 
    };
    return resultManifiesto; 
 		 }

	}
