import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescripcionAplicacionPage } from './descripcion-aplicacion.page';

const routes: Routes = [
  {
    path: '',
    component: DescripcionAplicacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescripcionAplicacionPageRoutingModule {}
