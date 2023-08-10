import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomComponent } from './random/random.component';

const routes: Routes = [
  {
    path: 'notfound', loadChildren: () => import('./components/new-module/new-module.module').then(m => m.NewModuleModule)
  },
  {
    path: '', component: RandomComponent
  },
  {
    path: '**', component: RandomComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
