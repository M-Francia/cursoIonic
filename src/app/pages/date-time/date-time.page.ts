import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

    fechaNaci: Date = new Date();
    customPickerOptions;
    customDate;
  constructor() { }

  ngOnInit() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: (evento) =>{
          console.log('Clicked Save!')
          console.log(evento.day.value);
          new Date();
        } 
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          //No se cierra al clicar por el return false
          return false;
        }
      }]
    }
  }

  cambioFecha(event){
    console.log(event);
    console.log(new Date(event.detail.value));
  }

}
