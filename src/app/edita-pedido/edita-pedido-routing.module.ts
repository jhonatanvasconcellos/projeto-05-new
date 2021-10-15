import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditaPedidoPage } from './edita-pedido.page';

const routes: Routes = [
  {
    path: '',
    component: EditaPedidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditaPedidoPageRoutingModule {}
