import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'sonic-the-hedgehog-two',
    loadChildren: () => import('./filmes/sonic-the-hedgehog-two/sonic-the-hedgehog-two.module').then( m => m.SonicTheHedgehogTwoPageModule)
  },
  {
    path: 'spiderman-no-way-home',
    loadChildren: () => import('./filmes/spiderman-no-way-home/spiderman-no-way-home.module').then( m => m.SpidermanNoWayHomePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
