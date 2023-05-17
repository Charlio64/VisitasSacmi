import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActividadFormComponent } from '../components/actividad_form/actividad_form.component';
import { ActividadComponent } from '../components/actividad/actividad.component';
import { DataService } from '../services/data.service';
import { Visita } from '../interfaces/interfaces';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements  OnInit{

  visitas: Visita[] = [];

  constructor(private modalCtrl: ModalController,
              private dataService: DataService) {}

  ngOnInit() {
    
    this.dataService.getVisitas()
      .subscribe(resp => {
        this.visitas = resp.data;        
      });
  }

  async addActividad() {

    const modal = await this.modalCtrl.create({ component: ActividadFormComponent });
    await modal.present();
  }

  async mostrarActividad(id: number) {

    let visita = {};

    for (let i = 0; i < this.visitas.length; i++)
    {
      if (this.visitas[i].entryNo === id)
      {
        visita = this.visitas[i];
        break;
      }
    } 

    const modal = await this.modalCtrl.create({ 
      component: ActividadComponent,
      componentProps: { visita }
     });

    await modal.present();    
  }

}

