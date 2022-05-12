import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpidermanNoWayHomePageRoutingModule } from './spiderman-no-way-home-routing.module';

import { SpidermanNoWayHomePage } from './spiderman-no-way-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpidermanNoWayHomePageRoutingModule
  ],
  declarations: [SpidermanNoWayHomePage]
})
export class SpidermanNoWayHomePageModule {}
