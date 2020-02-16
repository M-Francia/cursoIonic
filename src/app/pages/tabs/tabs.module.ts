import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'contact'
  },
  {
    path:'',
    component:TabsPage,
    children:
    [ 
      {
        path:'account',
        loadChildren: '../avatar/avatar.module#AvatarPageModule'
      },
      {
        path:'contact',
        loadChildren: '../list/list.module#ListPageModule'
      },
      {
        path:'settings',
        loadChildren: '../infinite-scroll/infinite-scroll.module#InfiniteScrollPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
