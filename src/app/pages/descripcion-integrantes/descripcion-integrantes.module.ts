import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescripcionIntegrantesPageRoutingModule } from './descripcion-integrantes-routing.module';

import { DescripcionIntegrantesPage } from './descripcion-integrantes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescripcionIntegrantesPageRoutingModule
  ],
  declarations: [DescripcionIntegrantesPage]
})
export class DescripcionIntegrantesPageModule {}
