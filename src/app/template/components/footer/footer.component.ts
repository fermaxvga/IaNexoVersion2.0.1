import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TemplateService } from '../../services/template.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  

  constructor(
    public _templateService:TemplateService
  ) { }

  ngOnInit(): void {

  }

}
