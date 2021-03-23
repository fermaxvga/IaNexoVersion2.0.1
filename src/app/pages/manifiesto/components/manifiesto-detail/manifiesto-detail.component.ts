import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormControl } from '@angular/forms';
import { UserService } from 'src/app/user/services/user.service';
import { ManifiestoService } from '../../services/manifiesto.service';
import { Manifiesto } from '../../model/manifiesto';
import { ServiciosCompartidosService } from 'src/app/shared/services/servicios-compartidos.service';


@Component({
  selector: 'app-manifiesto-detail',
  templateUrl: './manifiesto-detail.component.html',
  styleUrls: ['./manifiesto-detail.component.css']
})
export class ManifiestoDetailComponent implements OnInit {
  manifiesto: Manifiesto;
  stenciles: any;
  identity;
  role;
  lanzamiento;


  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _manifiestoService: ManifiestoService,
    private _compartidos: ServiciosCompartidosService
  ) { }

  ngOnInit(): void {
    console.log('detail');
    this.manifiestoDetail();
  }


  manifiestoDetail() {

    this._route.params.subscribe(params => {
      let id = +params['id'];
      console.log(id);
      this._manifiestoService.getManifiesto(id).subscribe(
        response => {
          if (response.status = 'success') {
            console.log(response);
            this.manifiesto = response.manifiesto[0];
            console.log(this.manifiesto);
            this.stenciles = response.stencil;
            console.log(this.stenciles);
            console.log(this.manifiesto.created_at);
            console.log(this.manifiesto.lote);
            if ((this.manifiesto.lote == 'L100') || (this.manifiesto.lote == 'L101')) {
              this.lanzamiento = true;
            }

            this.manifiesto.created_at = this._compartidos.formatearFecha(this.manifiesto.created_at);

          } else {
            this._router.navigate(['manifiesto-list']);
          }
        },
        error => {
          console.log(<any>error);
        })
    });
  }
}





