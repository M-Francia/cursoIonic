import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from '../../components/popinfo/popinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popoverCtrl:PopoverController) { }

  ngOnInit() {
  }

  async mostrarPop(evento){
    const popover = await this.popoverCtrl.create({
      component:PopinfoComponent,
      event: evento,
      mode:'ios',
      backdropDismiss: false //para que no se pueda cerrar si no hay interaccion en el popover
    });

    await popover.present();
    //const {data} = await popover.onDidDismiss();
    const {data} = await popover.onWillDismiss(); //este es mas rapido que el ondid

    console.log("padre",data);
  }

  
}
