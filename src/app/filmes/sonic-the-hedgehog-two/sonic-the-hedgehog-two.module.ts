import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SonicTheHedgehogTwoPageRoutingModule } from './sonic-the-hedgehog-two-routing.module';

import { SonicTheHedgehogTwoPage } from './sonic-the-hedgehog-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SonicTheHedgehogTwoPageRoutingModule
  ],
  declarations: [SonicTheHedgehogTwoPage]
})
export class SonicTheHedgehogTwoPageModule {}
