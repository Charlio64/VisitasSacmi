import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { ActividadFormComponent } from './actividad_form/actividad_form.component';
import { ActividadComponent } from './actividad/actividad.component';
import { ContactoComponent } from './contacto/contacto.component';
import { OfertaComponent } from './oferta/oferta.component';
import { PedidoComponent } from './pedido/pedido.component';

import { PropietarioComponent } from './modals-seleccion/propietario/propietario.component';
import { TipoComponent } from './modals-seleccion/tipo/tipo.component';
import { EstadoComponent } from './modals-seleccion/estado/estado.component';
import { CodClienteComponent } from './modals-seleccion/cod-cliente/cod-cliente.component';
import { ContactoDatoComponent } from './modals-seleccion/contacto-dato/contacto-dato.component';

import { ClienteComponent } from './modals-seleccion/cliente/cliente.component';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  declarations: [
    ActividadFormComponent,
    ActividadComponent,
    ContactoComponent,
    OfertaComponent,
    PedidoComponent,
    PropietarioComponent,
    TipoComponent,
    EstadoComponent,
    CodClienteComponent,
    ContactoDatoComponent,
    ClienteComponent
  ],
  exports: [
    ActividadFormComponent,
    ActividadComponent,
    ContactoComponent,
    OfertaComponent,
    PedidoComponent,
    PropietarioComponent,
    TipoComponent,
    EstadoComponent,
    CodClienteComponent,
    ContactoDatoComponent,
    ClienteComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    PipesModule
  ]
})
export class ComponentsModule { }
