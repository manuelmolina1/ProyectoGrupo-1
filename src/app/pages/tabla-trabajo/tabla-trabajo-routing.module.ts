import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablaTrabajoPage } from './tabla-trabajo.page';

const routes: Routes = [
  {
    path: '',
    component: TablaTrabajoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablaTrabajoPageRoutingModule {}
