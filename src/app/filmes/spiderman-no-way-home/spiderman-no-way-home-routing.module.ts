import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpidermanNoWayHomePage } from './spiderman-no-way-home.page';

const routes: Routes = [
  {
    path: '',
    component: SpidermanNoWayHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpidermanNoWayHomePageRoutingModule {}
