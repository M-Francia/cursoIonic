import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.page.html',
  styleUrls: ['./search-bar.page.scss'],
})
export class SearchBarPage implements OnInit {

  albumes:any[] = [];
  textoBuscar = '';

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getAlbums().subscribe(albumes=>{
      console.log(albumes);
      this.albumes = albumes;
    })
  }

  //la propiedad debounce marca la espera para hacer el evento onclick
  buscar(event){
    this.textoBuscar = event.detail.value;
  }

}
