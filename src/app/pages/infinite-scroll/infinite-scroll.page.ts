import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  //Cuando necesitemos algo del html usamos viewchild
  @ViewChild(IonInfiniteScroll,{static: false}) infiniteScroll: IonInfiniteScroll;

  data:any[] = Array(20);

  constructor() { }

  ngOnInit() {
  }

  loadData(event){
    console.log('Cargando...');

    setTimeout(() => {

      if(this.data.length > 50){
        //Para terminar la carga
        event.target.complete();
        this.infiniteScroll.disabled = true;
        return;
      }

      const nuevoArr = Array(20);
      this.data.push(...nuevoArr);
      event.target.complete(); // Para indicar que la carga esta hecha
    }, 1000);
  }

}
