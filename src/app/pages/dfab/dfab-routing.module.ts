import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DfabPage } from './dfab.page';

const routes: Routes = [
  {
    path: '',
    component: DfabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DfabPageRoutingModule {}
