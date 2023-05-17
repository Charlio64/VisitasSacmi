import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

import { Contacto } from 'src/app/interfaces/interfaces';

import { PropietarioComponent } from '../modals-seleccion/propietario/propietario.component';
import { TipoComponent } from '../modals-seleccion/tipo/tipo.component';
import { EstadoComponent } from '../modals-seleccion/estado/estado.component';
import { CodClienteComponent } from '../modals-seleccion/cod-cliente/cod-cliente.component';
import { ClienteComponent } from '../modals-seleccion/cliente/cliente.component';


@Component({
  selector: 'app-actividad-form',
  templateUrl: './actividad_form.component.html',
  styleUrls: ['./actividad_form.component.scss'],
})
export class ActividadFormComponent  implements OnInit {

  // contactos: Contacto[] = [];
  parteContactos: Contacto[] = []; // Los 50 primeros

  valuePropietario: string = 'Seleccione';
  valueTipo: string = 'Seleccione';
  valueEstado: string = 'Seleccione';
  valueCodigo: string = 'Seleccione';
  valueCliente: string = 'Seleccione';
  valuePlat: string = '...';
  valueContacto: string = 'Seleccione cliente';

  constructor(private modalCtrl: ModalController,
              private dataService: DataService) { }

  ngOnInit() {

    this.dataService.getContactos()
      .subscribe(resp => {
        // this.contactos = resp.data;        
        this.parteContactos = resp.data.slice(0, 50);              
      });
  }

  volver() {
    this.modalCtrl.dismiss();
  }

  async seleccionar(campo: string) { 

    let component: any;
    
    switch (campo) {
      case 'propietario':
        component = PropietarioComponent;       
        break;

      case 'tipo':
        component = TipoComponent;     
        break;

      case 'estado':
        component = EstadoComponent;       
        break;

      case 'codigo':
        component = CodClienteComponent;       
        break;

      case 'cliente':
        component = ClienteComponent;       
        break;
    }

    const modal = await this.modalCtrl.create({
      component: component
    });
    modal.present();

    const { data } = await modal.onWillDismiss();

    switch (campo) {
      case 'propietario':
        this.valuePropietario = data;      
        break;

      case 'tipo':
        this.valueTipo = data;     
        break;

      case 'estado':
        this.valueEstado = data;      
        break;

      case 'codigo':
        this.valueCodigo = data; 
        // Rellenamos los otros campos del cliente 
        for (let i = 0; i < this.parteContactos.length; i++)
        {
          if (this.parteContactos[i].code === data)
          {
            this.valueCliente = this.parteContactos[i].nombre;
            // this.valuePlat = ??;
            this.valueContacto = `Tlf: ${this.parteContactos[i].telefono} / Email: ${this.parteContactos[i].email} `;
            break;
          }
        }      
        break;

      case 'cliente':
        this.valueCliente = data;
        // Rellenamos los otros campos del cliente 
        for (let i = 0; i < this.parteContactos.length; i++)
        {
          if (this.parteContactos[i].nombre === data)
          {
            this.valueCodigo = this.parteContactos[i].code;
            // this.valuePlat = ??;
            this.valueContacto = `Tlf: ${this.parteContactos[i].telefono} / Email: ${this.parteContactos[i].email} `;
            break;
          }
        }          
        break;
    }
        
  }

}
