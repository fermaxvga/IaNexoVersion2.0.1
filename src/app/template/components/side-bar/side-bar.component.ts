import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { faBars,faClipboardList,faFileAlt,faProjectDiagram,faStopwatch, faTools, faWrench } from '@fortawesome/free-solid-svg-icons';
import { TemplateService } from '../../services/template.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit, OnDestroy{
  menu: boolean=true; 
  menuSubscription: Subscription; 
  pruebaSubscription: Subscription;
  activar:string='active'; 
  bar=faBars;
  file=faFileAlt; 
  stopwatch=faStopwatch; 
  clipboardList=faClipboardList; 
  tools=faTools;
  proyect=faProjectDiagram
  


  constructor(
    public _templateService:TemplateService
    ) 
    {  }

  ngOnInit(): void {

    this.activar=''; 
    this.menuSubscription= this._templateService.menu_obs.subscribe(
      response=>{
       console.log(response);
        if(response==true){
          console.log('Mostrar el Menú');
          this.activar='active';
        }else{
          if(response==false){
            console.log('No mostrar el Menú');
            this.activar='';
          }
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

  ngOnDestroy(){
    this.menuSubscription.unsubscribe(); 
   }
  ocultarMenu(){
      this._templateService.menu_obs.emit(false);
      this.activar='';
    }


  }
