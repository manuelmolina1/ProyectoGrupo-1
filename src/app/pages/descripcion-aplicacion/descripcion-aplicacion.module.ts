import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescripcionAplicacionPageRoutingModule } from './descripcion-aplicacion-routing.module';

import { DescripcionAplicacionPage } from './descripcion-aplicacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescripcionAplicacionPageRoutingModule
  ],
  declarations: [DescripcionAplicacionPage]
})
export class DescripcionAplicacionPageModule {}
