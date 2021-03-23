import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/services/user.service';
import { ProcedimientosService } from '../../service/procedimientos.service';
import { GLOBAL } from 'src/app/shared/models/global';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { Procedimiento } from '../../model/procedimientos';






@Component({
  selector: 'app-procedimientos-new',
  templateUrl: './procedimientos-new.component.html',
  styleUrls: ['./procedimientos-new.component.css'],
  providers: [UserService, ProcedimientosService]
})
export class ProcedimientosNewComponent implements OnInit, DoCheck {
  token;
  identity;
  categorias: any[];
  categoriasSelect: any[];
  suprOptions: any = [];
  categoriasOptions: any = [];
  tag: any;
  titulo: string;
  comentario: string = '';
  documento: string = '';
  procedimiento: Procedimiento;
  selectedFile: File = null;
  formato: boolean = true;
  archivo: File;
  loading: boolean = false;
  loaded: boolean = false;
  subido: boolean = false;
  pSubido: any;
  url: string;
  filePdf = faFilePdf;
  newTag;
  nuevoTag;
  nuevoTagVacio: boolean;
  error:string; 


  constructor(
    private _procedimientos: ProcedimientosService,
    private _userService: UserService,
    private _router: Router
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = GLOBAL.storage;
  }

  ngOnInit(): void {
    this.categoriasSelect = [];
    console.log(this.identity);
    console.log(this.token);
    this.traerCategorias();

  }

  ngDoCheck() {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  traerCategorias() {
    this._procedimientos.getCategorias().subscribe(
      response => {
        console.log(response);
        if (response.status == "success") {
          this.categorias = response.categorias;
          this.categoriasOptions = response.categorias;
        } else {
          console.log("no se pudo traer las categorias");
        }
      },
      error => {
        console.log(<any>error);
        this.error=error.status; 
      }
    );
  }

  selectCategoria(event, categoria) {
    // Selección de una categoría, check box en estado Checked
    if (event.target.checked == true) {
      console.log(event.target.checked, categoria);
      //Recolectamos la categoría seleccionada y la almacenamos en un arreglo
      this.categoriasSelect.push(categoria);
      let index = this.categoriasOptions.indexOf(categoria);
      this.categoriasOptions.splice(index, 1);
      console.log(this.categoriasSelect.length);

    } else {
      // DesSelección de una categoría, check box en estado Unchecked
      console.log(categoria);
      //Obtenemos el índice de la categoría en el arreglo de categorías seleccionadas
      let index = this.categoriasSelect.indexOf(categoria);

      //Eliminamos el elemento que es igual a la categoría desSeleccionada
      this.categoriasSelect.splice(index, 1);
      console.log(index);
      // Hay que quitar las opciones de subcategorías que correspondían a la categoría eliminada. 
      console.log('A eliminar');
      console.log(this.suprOptions);


      //reiniciamos el arreglo de las opciones a eliminar
      //almacenamos en un arreglo las subcategorías que habrá que eliminar
    }
  }
  //en el arreglo de las subcategorias seleccionadas, quitamos las que corresponden.  

  quitarCategoria(categoria) {
    console.log(categoria);
    this.categoriasOptions.push(categoria);
    let index = this.categoriasSelect.indexOf(categoria);
    this.categoriasSelect.splice(index, 1);
    console.log(this.categoriasSelect.length);
  }


  onSubmit(form) {
    this.procedimiento = new Procedimiento(1, '', '', '','');
    this.procedimiento.titulo = form.value.title;
    this.procedimiento.comentario = form.value.coment;
    this.procedimiento.categorias = this.categoriasSelect;
    console.log(this.procedimiento);
    this.crearProcedimiento(this.selectedFile, this.procedimiento);
  }



  addTag() {

    if (typeof (this.newTag) == 'string') {
      this.nuevoTagVacio = false;
      this._procedimientos.addTag(this.newTag).subscribe(
        response => {
          if (response.status == 'success') {
            console.log(response);
            this.traerCategorias();
            this.nuevoTag = response.tag.categoria;
            console.log(this.nuevoTag);
          }
        },
        error => {
          console.log(<any>error);
          this.error=error.status; 
        }
      )
    } else {
      this.nuevoTagVacio = true;
    }

  }
  cargarArchivo(event) {
    console.log("Función - cargarArchivo");
    this.selectedFile = <File>event.target.files[0];
    this.formato = this.validarFormato(this.selectedFile.name);
    if (this.selectedFile && this.formato) {
      let select = "OK"
      console.log(select);;
    }
  }

  validarFormato(fileName) {
    let format = fileName.slice((fileName.lastIndexOf(".") - 1 >>> 0) + 2);
    if (format === 'pdf') {
      console.log('formato ', format);
      return true;
    } else {
      return false;
    }
  }

  crearProcedimiento(archivo, procedimiento) {
    this.loading = true;
    this._procedimientos.onUpload(this.identity, archivo, procedimiento).subscribe(
      response => {
        if (response.status == "success") {
          console.log(response);
          this.loading = false;
          this.archivoCargado();
          let id = response.post.id;
          this._procedimientos.getContenido(id).subscribe(
            response => {
              if (response.status == 'success') {
                this.pSubido = response.post[0];
                console.log(this.pSubido);
              }
            },
            error => {
                console.log(<any>error);
                this.error=error.status; 
            }
          );

        } else {
          console.log("Hubo un error al tratar de enviar el archivo");
        }
      },
      error => {
        console.log(<any>error);
        this.error=error.status; 
      }
    );
  }

  archivoCargado() {
    this.loaded = true;
    this.selectedFile = null;
    setTimeout(() => {
      this.loaded = false;
      this.subido = true;
      //  this._procedimientos.reload.emit(true);  

      Swal.fire({
        title: 'Procedimiento creado exitosamente',
        text: "",
        icon: 'success',
          showClass:{
          popup: 'swal2-noanimation',
          backdrop: 'swal2-noanimation'
        }
      })
      this._router.navigate(['procedimientos/listado']); 
    }, 2000);
  }

 

  salirSinGuardar(){

    Swal.fire({
      title: 'Salir sin crear el procedimiento?',
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Salir sin guardar',
      cancelButtonText: 'Volver para guardar',
      showClass:{
        popup: 'swal2-noanimation',
        backdrop: 'swal2-noanimation'
      }
    }).then((result) => {
      if (result.isConfirmed) {
          this._router.navigate(['procedimientos/listado']);
        }
      })
  
    }


}
