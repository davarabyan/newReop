import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { Component1Component } from '../component1/component1.component';
import { Component2Component } from '../component2/component2.component';

const routes: Routes = [
  {
    path: 'firstpath/:id', component: Component1Component
  },
  {
    path: '', component: Component2Component
  }
  
];





@NgModule({
  declarations: [Component1Component, Component2Component],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class NewModuleModule { }
