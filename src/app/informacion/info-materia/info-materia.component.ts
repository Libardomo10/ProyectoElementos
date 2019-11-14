import { Component, OnInit } from '@angular/core';
import { LeftMenuComponent } from '../../Layout/left-menu/left-menu.component';

@Component({
  selector: 'app-info-materia',
  templateUrl: './info-materia.component.html',
  styleUrls: ['./info-materia.component.css']
})
export class InfoMateriaComponent implements OnInit {

  constructor(public lm: LeftMenuComponent) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.lm.ngOnInit();
  }
}
