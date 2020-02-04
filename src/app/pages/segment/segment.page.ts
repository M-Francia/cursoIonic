import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  @ViewChild(IonSegment, {static: true}) segment: IonSegment;

  superHeroes: Observable<any>;
  publisher = '';

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.segment.value='todos';
    //console.log('segmento:',this.segment);
    this.superHeroes = this.dataService.getSuperHeroes();
  }

  segmentChanged( event ){
    const valorSegmento = event.detail.value;

    if(valorSegmento === 'todos'){
      this.publisher = '';
      return;//para que no siga ejecutando codigo
    }

    this.publisher = valorSegmento;

    console.log(valorSegmento);
  }

}
