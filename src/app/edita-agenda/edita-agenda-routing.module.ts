import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditaAgendaPage } from './edita-agenda.page';

const routes: Routes = [
  {
    path: '',
    component: EditaAgendaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditaAgendaPageRoutingModule {}
