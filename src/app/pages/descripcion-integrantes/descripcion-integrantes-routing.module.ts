import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescripcionIntegrantesPage } from './descripcion-integrantes.page';

const routes: Routes = [
  {
    path: '',
    component: DescripcionIntegrantesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescripcionIntegrantesPageRoutingModule {}
