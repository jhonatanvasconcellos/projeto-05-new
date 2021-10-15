import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditaAgendaPageRoutingModule } from './edita-agenda-routing.module';

import { EditaAgendaPage } from './edita-agenda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditaAgendaPageRoutingModule
  ],
  declarations: [EditaAgendaPage]
})
export class EditaAgendaPageModule {}
