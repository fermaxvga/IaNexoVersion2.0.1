import { Component, OnInit, DoCheck } from '@angular/core';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { ProcedimientosService } from '../../service/procedimientos.service';
import { UserService } from 'src/app/user/services/user.service';
import { Router } from '@angular/router';
import {faBorderAll} from '@fortawesome/free-solid-svg-icons';
import {faThList} from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-procedimientos-home',
  templateUrl: './procedimientos-home.component.html',
  styleUrls: ['./procedimientos-home.component.css']
})
export class ProcedimientosHomeComponent implements OnInit, DoCheck {
  token;
  identity;
  categorias: any[];
  subCategorias: any[];
  select1: boolean = false;
  postNivel1: boolean = false;
  comentario = [];
  filePdf = faFilePdf;
  filtrar: boolean = false;
  identificacion: boolean = false;
  borderAll=faBorderAll;
  thList=faThList; 
  mosaico: boolean=true;




  constructor(
    private _procedimientos: ProcedimientosService,
    private _userService: UserService,
    private _router: Router
  ) {
    this.token = this._userService.getToken();
    this.identity = this._userService.getIdentity();
  }

  ngOnInit(): void {



    //    this._router.navigate(['procedimientos/home']); 



    // this._procedimientos.getCategorias().subscribe(
    //   response => {
    //     if (response.status == "success") {
    //       console.log(response);
    //       this.categorias = response.categorias
    //       console.log(this.categorias);
    //     } else {
    //       console.log("no se pudo traer las categorias");
    //     }
    //   },
    //   error => {
    //     console.log(<any>error);
    //   });
  }

  ngDoCheck() {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }


  selectCategory(id) {
    console.log(id);
    this._procedimientos.filtrar(id).subscribe(
      response => {
        if(response.status == "success"){
          console.log(response);
        };
      },
      error => {
        console.log(<any>error);
      }
    );

  }

  filtrarCat() {
    if (this.filtrar == false) {
      this.filtrar = true;
      this.subCategorias = null;
    } else {
      this.filtrar = false;
    }
  }

  nuevoPost() {
    alert('Subir Nuevo Procedimiento');
  }





}
