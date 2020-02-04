import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.component.html',
  styleUrls: ['./popinfo.component.scss'],
})
export class PopinfoComponent implements OnInit {

  items= Array(40);

  constructor( private popoverCtrl:PopoverController) { }

  ngOnInit() {}

  onClick(elemento:number){

    console.log("item", elemento);

    this.popoverCtrl.dismiss({
      item:elemento
    });

  }

}
