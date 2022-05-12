import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SonicTheHedgehogTwoPage } from './sonic-the-hedgehog-two.page';

const routes: Routes = [
  {
    path: '',
    component: SonicTheHedgehogTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SonicTheHedgehogTwoPageRoutingModule {}
