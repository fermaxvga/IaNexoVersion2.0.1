import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/user/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

import { faBars, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { TemplateService } from '../../services/template.service';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  providers: [UserService]
})
export class ToolbarComponent implements OnInit, DoCheck {
  title = 'frontEnd';
  bar = faBars;
  sigIn = faSignInAlt;
  sigOut = faSignOutAlt;
  verMenu: boolean = false;
  verLogin: boolean = false;
  identity;
  token;
  role: string;
  menuSubscription: Subscription;
  identitySubscription: Subscription;

  constructor(
    private _templateService: TemplateService,
    private _userService: UserService,
    private _router: Router,
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ngOnInit(): void {
    console.log(this.identity);
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    if (this.identity) {
      switch (this.identity.role) {
        case 1: this.role = "Administrador";
          break;
        case 2: this.role = "Supervisor";
          break;
        case 3: this.role = "Tecnico";
          break;
        case 4: this.role = "Programador";
          break;
        case 5: this.role = "Operador";
          break;
        case 6: this.role = "Npi";
          break;
        default:
          break;
      }
    }
    console.log(this.identity);
    console.log(this.token);
    this.menuSubscription = this._templateService.menu_obs.subscribe(
      response => {
        if (response == true) {
        } else {
          if (response == false) {
            this.verMenu = false;
          }
        }
      }
    );

  }

  ngDoCheck() {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }


  mostrarLogin() {

    if (this.verLogin === false) {
      this.verLogin = true;
      //  console.log(this.verLogin);
      this._templateService.login_obs.emit(true);
    } else {
      if (this.verLogin === true) {
        this.verLogin = false;
        //    console.log(this.verLogin);
        this._templateService.login_obs.emit(false);
      }
    }
  }

  logout() {
    // console.log("Desloguearse");
    this._templateService.identity_obs.emit(1);
  }
  mostrarMenu() {
    this._templateService.menu_obs.emit(true);
    if (this.verMenu == false) {
      this._templateService.menu_obs.emit(true);
      this.verMenu = true;
    } else {
      if (this.verMenu == true) {
        this._templateService.menu_obs.emit(false);
        this.verMenu = false;
      }
    }
  }

}
