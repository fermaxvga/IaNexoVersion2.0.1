import { Component, OnInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params, ActivationEnd } from '@angular/router';
import { UserService } from 'src/app/user/services/user.service';
import { ProcedimientosService } from '../../service/procedimientos.service';
import { ServiciosCompartidosService } from 'src/app/shared/services/servicios-compartidos.service';
import { GLOBAL } from 'src/app/shared/models/global';
import Swal from 'sweetalert2';
import { Procedimiento } from '../../model/procedimientos';



@Component({
  selector: 'app-procedimientos-edit',
  templateUrl: './procedimientos-edit.component.html',
  styleUrls: ['./procedimientos-edit.component.css']
})
export class ProcedimientosEditComponent implements OnInit {
  token;
  identity;
  url: string;
  categorias: any[];
  categoriasSelect: any[] = [''];
  categoriasOptions: any[];
  procedimiento: Procedimiento;
  selectedFile: File = null;
  formato;
  archivo: File;
  loading: boolean = false;
  loaded: boolean = false;
  subido: boolean = false;
  pSubido: any;


  post: any;
  fecha_creacion: any;
  fecha_modif: any;
  tags;
  tags_promesa;
  categorias_promesa;
  documento;
  id: number;
  archivoNuevo: boolean=false;
  editarTitulo:boolean=false;
  editarComentario:boolean=false; 

  constructor(
    private _procedimientos: ProcedimientosService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _compartidos: ServiciosCompartidosService,
    private _userService: UserService
  ) {
    this.url = GLOBAL.storage;
  }

  ngOnInit(): void {
    // this.formato=='pdf'; 
    console.log(this.formato);
    this.getCategorias();
  }
  ngDoCheck() {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  getCategorias() {
    this.categorias_promesa = new Promise((resolve, reject) => {
      this._procedimientos.getCategorias().subscribe(
        response => {
          //  console.log(response);
          if (response.status == "success") {
            this.categorias = response.categorias;
            this.categoriasOptions = this.categorias;
            resolve('categorias cumplido');
            // console.log(this.categorias.length);
          } else {
            console.log("no se pudo traer las categorias");
            reject('categorias no cumplido');
          }
          this.categorias_promesa.then(this.getContenido(), console.log('reject de categorias'))
            .catch(console.log('error promesa 1'));
        },
        error => {
          console.log(<any>error);
        }
      );
    })
  }


  getContenido() {
    this._route.params.subscribe(params => {
      this.id = +params['id'];
      console.log(this.id);
      //traemos el contenido del post correspondiente al id
      this._procedimientos.getContenido(this.id).subscribe(
        response => {
          if (response.status == "success") {
            console.log(response);
            this.post = response.post[0];
            this.documento = response.post[0].documento;
            this.formato = this._compartidos.validarFormato(this.documento);
            console.log(this.formato);
            this.tags = response.tags;
            //  this.categoriasSelect=['']; 
            for (let i = 0; i < this.tags.length; i++) {
              this.categoriasSelect[i] = this.tags[i].cat;
            }

            this.tags_promesa = new Promise((resolve, reject) => {
              if (this.tags) {
                resolve('tags cumplido');
              } else {
                console.log('ejecutar reject promesa 2');
                reject('no se cumplió');
              }
            });

            this.tags_promesa.then(this.checkTags(), console.log('error de reject'))
              .catch(error => console.log(error));
            console.log(this.tags);
            this.fecha_creacion = this._compartidos.formatearFecha(this.post.created_at);
            this.fecha_modif = this._compartidos.formatearFecha(this.post.updated_at);
          }
        },
        error => {
          console.log(<any>error);
        }
      );
    });
  }




  checkTags() {
    for (let i = 0; i < this.categoriasSelect.length; i++) {
      for (let j = 0; j < this.categoriasOptions.length; j++) {
        if (this.categoriasSelect[i].categoria == this.categoriasOptions[j].categoria) {
          console.log('categoría preseleccionada');
          let index = this.categoriasOptions.indexOf(this.categoriasOptions[j]);
          this.categoriasOptions.splice(index, 1);
        }
      }
    }
  }

  selectCategoria(event, categoria) {
    // Selección de una categoría, check box en estado Checked
    if (event.target.checked == true) {
      console.log(event.target.checked, categoria);
      //Recolectamos la categoría seleccionada y la almacenamos en un arreglo
      this.categoriasSelect.push(categoria);
      let index = this.categoriasOptions.indexOf(categoria);
      this.categoriasOptions.splice(index, 1);
      // console.log(this.categoriasSelect.length);
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
      //console.log(this.suprOptions);


      //reiniciamos el arreglo de las opciones a eliminar
      //almacenamos en un arreglo las subcategorías que habrá que eliminar
    }
  }

  quitarCategoria(categoria) {
    console.log(categoria);
    this.categoriasOptions.push(categoria);
    let index = this.categoriasSelect.indexOf(categoria);
    this.categoriasSelect.splice(index, 1);
    console.log(this.categoriasSelect.length);
  }

  cargarArchivo(event) {
    console.log("Función - cargarArchivo");
    this.selectedFile = <File>event.target.files[0];
    this.archivoNuevo=true;
    this.formato = this._compartidos.validarFormato(this.selectedFile.name);
    if (this.selectedFile && this.formato) {
      let select = "OK"
      console.log(select);;
    }
  }


  onSubmit(form) {
    console.log(form.value);
    this.procedimiento = new Procedimiento(this.id, '', '', '', '');
    this.procedimiento.titulo = form.value.title;
    this.procedimiento.comentario = form.value.coment;
    this.procedimiento.categorias = this.categoriasSelect;
    console.log(this.procedimiento);
    this.editarProcedimiento(this.selectedFile, this.procedimiento);
  }

  editarProcedimiento(archivo, procedimiento) {
    this.loading = true;
    console.log(archivo);
    console.log(procedimiento);
    //  this.archivoCargado(); 
    this._procedimientos.editar(this.identity, archivo, procedimiento).subscribe(
      response => {
        if (response.status == "success") {
          console.log(response);
          this.loading = false;
          this.archivoCargado();
    
        } else {
          console.log("Hubo un error al tratar de enviar el archivo");
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }


  archivoCargado() {
    if(this.archivoNuevo){
      this.loaded = true;
    }
    this.selectedFile = null;
    setTimeout(() => {
      this.loaded = false;
      this.subido = true;

      this.edicionGuardada();       
      this._router.navigate(['procedimientos/listado']);
    }, 1500);
  }

  listado(){
    this._router.navigate(['procedimientos/listado']);
  }

salirSinGuardar(){

  Swal.fire({
    title: 'Seguro desea salir sin guardar los cambios?',
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

  edicionGuardada(){
    Swal.fire({
      icon: 'success',
      title: 'Los cambios se guardaron correctamente',
      showConfirmButton: false,
      timer: 1500,
      showClass:{
        popup: 'swal2-noanimation',
        backdrop: 'swal2-noanimation'
      }
    })

  }

  editTitulo(event){
    if(event.target.checked){
      this.editarTitulo=true; 
    }else{
      this.editarTitulo=false; 
    }
  }

  editcomentario(event){
    if(event.target.checked){
      this.editarComentario=true; 
    }else{
      this.editarComentario=false; 
    }

  }
    
}
