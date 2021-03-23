import { Component, OnInit, ViewChild } from '@angular/core';
import { ManifiestoService } from '../../services/manifiesto.service';
import { Router, ActivatedRoute}	     			 from '@angular/router';
import { ServiciosCompartidosService } from 'src/app/shared/services/servicios-compartidos.service';
import { Manifiesto } from '../../model/manifiesto';
//import { MatSort } from '@angular/material/sort';
import { Sort }	 						 	                 from '@angular/material/sort';





@Component({
  selector: 'app-manifiesto-list',
  templateUrl: './manifiesto-list.component.html',
  styleUrls: ['./manifiesto-list.component.css']
})
export class ManifiestoListComponent implements OnInit {
  public manifiestos: any;
  manifiestos_promesa;

  public sortedManifiesto: Manifiesto[];


  constructor(
    private _route: ActivatedRoute, 
  	private _router: Router,
    private _manifiestoService:  ManifiestoService,
    private _compartidos: ServiciosCompartidosService
  ) {
     //this.sortedManifiesto=this.manifiestos.slice(); 
   }

  ngOnInit(): void {
    this.get_manifiestos();//traemos todos los manifiestos
  //  this.sortedManifiesto=this.manifiestos.slice(); 

  }
  get_manifiestos(){ //Funcion que llama al servicio para traer TODOS los manifiestos
  	this.manifiestos_promesa= new Promise((resolve,reject)=>{
      this._manifiestoService.getManifiestos().subscribe(
        response=>{
          if(response.status=='success'){
          this.manifiestos=response.manifiesto;
          for (let i = 0; i < this.manifiestos.length; i++) {
            this.manifiestos[i].created_at =this._compartidos.formatearFecha(this.manifiestos[i].created_at);
            this.manifiestos[i].updated_at =this._compartidos.formatearFecha(this.manifiestos[i].updated_at); 
          }
  				console.log(this.manifiestos);
          resolve('manifiestos cumplido');
          //       
          
  				
        }else{
          console.log('no se pudo traer los manifiestos');
          reject('manifiesto no cumplido');
        }
        this.manifiestos_promesa.then(this.sortedManifiesto=this.manifiestos.slice(),console.log('reject de manifiestos'))
        .catch(console.log('error promesa'));
        //console.log(response);
        
  		},
  		error=>{
        console.log(error)
  		})
      
      
    });
    }

  sortManifiesto(sort: Sort){
    const data=this.manifiestos.slice();
    if(!sort.active || sort.direction===''){
      this.sortedManifiesto=data;
      return;
    }
       this.sortedManifiesto=data.sort((a,b)=>{
      const isAsc=sort.direction==='asc';
               
      switch (sort.active){
        case 'op':          		return compare(a.op,b.op,isAsc);
        case 'modelo':  			return compare(a.modelo,b.modelo,isAsc);
        case 'lote':				return compare(a.lote,b.lote,isAsc);
        case 'panel': 				return compare(a.panel,b.panel,isAsc);
        case 'linea': 				return compare(a.linea,b.linea,isAsc);
        case 'carril': 				return compare(a.carril,b.carril,isAsc);
        case 'lado': 				return compare(a.lado,b.lado,isAsc);
        case 'programador': 		return compare(a.user.surname,b.user.surname,isAsc);
        case 'fecha_creacion': 		return compare(a.created_at,b.created_at,isAsc);
        case 'fecha_update': 		return compare(a.updated_at,b.updated_at,isAsc);
        case 'modo': return compare(a.manual,b.manual,isAsc);

        default: return 0;
        
      }
    });
  }

  filterManifiesto=''; 
  pActual: number = 1; 

}


function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);

}
