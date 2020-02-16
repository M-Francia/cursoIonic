import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage implements OnInit {

  porcentaje: number;

  constructor() { }

  ngOnInit() {
    this.porcentaje = 0;
  }

  cambioRango(evento){
    console.log(evento)
    this.porcentaje = evento.detail.value/100;
  }

}
