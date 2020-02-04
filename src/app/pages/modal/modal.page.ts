import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {
  }

  async abrirModal(){
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      componentProps: {
        'nombre': 'Mario',
        'pais': 'España'
      }
    });
    modal.present();

    await modal.present();
    //Promesa que esta escuchando cuando el modal se cierra, 
    //lo que sea que venga lo va a grabar en data
    const {data} = await modal.onDidDismiss();
    console.log('Retorna modal',data);
  }

  

}
