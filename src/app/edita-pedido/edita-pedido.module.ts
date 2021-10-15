import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditaPedidoPageRoutingModule } from './edita-pedido-routing.module';

import { EditaPedidoPage } from './edita-pedido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditaPedidoPageRoutingModule
  ],
  declarations: [EditaPedidoPage]
})
export class EditaPedidoPageModule {}
