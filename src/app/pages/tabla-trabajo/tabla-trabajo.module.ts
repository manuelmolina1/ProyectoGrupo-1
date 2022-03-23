import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TablaTrabajoPageRoutingModule } from './tabla-trabajo-routing.module';

import { TablaTrabajoPage } from './tabla-trabajo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TablaTrabajoPageRoutingModule
  ],
  declarations: [TablaTrabajoPage]
})
export class TablaTrabajoPageModule {}
