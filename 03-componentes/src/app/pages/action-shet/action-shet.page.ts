import { Component, OnInit } from '@angular/core';
import {ActionSheetController} from '@ionic/angular';


@Component({
  selector: 'app-action-shet',
  templateUrl: './action-shet.page.html',
  styleUrls: ['./action-shet.page.scss'],
})
export class ActionShetPage implements OnInit {

  constructor(private actionSheetCtrl:ActionSheetController) { }

  ngOnInit() {
  }
  //este metodo regresa una promesa, es lo que le dice el async
  //promesa es una tarea asincrona
  //await dice, espera hasta que el action-sheet controller cree el componenete,
  //se almacena en la constante actionSheet y luego se muestra
  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Albums',
      buttons: [{
        cssClass:'rojo',
        text: 'Delete',
        //role es lo que pone en rojo el componente
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        //si se hace click fuera del menu se dispara este handler
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
