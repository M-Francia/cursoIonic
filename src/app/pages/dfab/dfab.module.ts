import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DfabPageRoutingModule } from './dfab-routing.module';

import { DfabPage } from './dfab.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DfabPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DfabPage]
})
export class DfabPageModule {}
