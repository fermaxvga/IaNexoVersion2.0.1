import { Component, OnInit, DoCheck } from '@angular/core';
import { ProcedimientosService } from '../../service/procedimientos.service';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import {faBorderAll} from '@fortawesome/free-solid-svg-icons';
import {faThList} from '@fortawesome/free-solid-svg-icons';
import { Router, ActivatedRoute } from '@angular/router';
import { GLOBAL } from 'src/app/shared/models/global';
import { Subscription } from 'rxjs';
import { ServiciosCompartidosService } from 'src/app/shared/services/servicios-compartidos.service';
import { UserService } from 'src/app/user/services/user.service';
import { Procedimiento } from '../../model/procedimientos';


@Component({
  selector: 'app-procedimientos-list',
  templateUrl: './procedimientos-list.component.html',
  styleUrls: ['./procedimientos-list.component.css']
})
export class ProcedimientosListComponent implements OnInit, DoCheck {
  posts: Procedimiento[];
  filePdf = faFilePdf;
  borderAll=faBorderAll;
  thList=faThList; 
  url: string;
  recargar: Subscription;
  tagsPost; 
  tagsAcumulados:any=[];
  categorias;
  categoriaSelect:any; 
  categoriasOptions;
  filtrar:boolean=false; 
  error;
  mosaico: boolean=true;
  identity;
  token; 

  constructor(
    private _procedimientos: ProcedimientosService,
    private _router: Router,
    private _compartidos: ServiciosCompartidosService,
    private _userService: UserService,


  ) {
    this.url = GLOBAL.storage;
    this.token = this._userService.getToken();
    this.identity = this._userService.getIdentity();
  }

  ngOnInit(): void {
    this.obtenerProcedimientos();
    this.obtenerCategorias();


    // this.recargar=this._procedimientos.reload.subscribe(
    //   response=>{
    //     console.log(response);
    //     if(response==true){
    //       this.obtenerProcedimientos();
    //     }
    //   }
    // );

    
  }
  ngDoCheck() {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  
  
  obtenerProcedimientos(){
    this._procedimientos.getProcedimientos().subscribe(
      response => {
        if (response.status == 'success') {
          console.log(response);
          this.posts = response.posts;
       
         
  
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  obtenerCategorias(){
    this._procedimientos.getCategorias().subscribe(
      response => {
        if (response.status == "success") {
          console.log(response);
          this.categorias = response.categorias
           //  this.categoriasOptions=this.categorias; 
          console.log(this.categorias);
        } else {
          console.log("no se pudo traer las categorias");
        }
      },
      error => {
        console.log(<any>error);
      });
  }


  detail(id) {
    console.log(id);
    this._router.navigate(['procedimientos/detail/' + id]);
  }

  todos(){
    this.filtrar=false;
    this.obtenerProcedimientos();
  }

  selectCategoria(multiple, categoria) {
    console.log(multiple);
   // console.log(event.target.checked);
    this.filtrar=true;
    console.log(categoria);
    if(multiple){
      for (let i = 0; i < this.categorias.length; i++) {
        if(this.categorias[i].categoria==categoria){
        console.log(this.categorias[i]);
        this._procedimientos.filtrar(this.categorias[i].id).subscribe(
          response => {
            if(response.status == "success"){
              console.log(response);
              this.tagsPost=response.tags; 
              console.log(this.tagsPost);
            };
          },
          error => {
            console.log(<any>error);
          }
          );
        }
      }
    }else{

      this._procedimientos.filtrar(categoria.id).subscribe(
        response => {
          if(response.status == "success"){
            console.log(response);
            this.tagsPost=response.tags; 
            console.log(this.tagsPost);
          };
        },
        error => {
          console.log(<any>error);
        }
      );
    }
      
        
  }

  vista(){
    if(this.mosaico==true){
      this.mosaico=false
    }else if(this.mosaico==false){
      this.mosaico=true;
    }
  }



  filterPost='';
  filterPostTag='';

}
