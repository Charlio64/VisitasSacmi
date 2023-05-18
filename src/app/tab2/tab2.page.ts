import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { ContactoComponent } from '../components/contacto/contacto.component';
import { DataService } from '../services/data.service';
import { Contacto } from '../interfaces/interfaces';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  // contactos: Contacto[] = [];
  parteContactos: Contacto[] = []; // Los 50 primeros
  termino: string = '';

  constructor(private modalCtrl: ModalController,
              private loadingCtrl: LoadingController,
              private dataService: DataService) {}

  ngOnInit() {

    this.showLoading();
    this.dataService.getContactos()
      .subscribe(resp => {
        // this.contactos = resp.data;        
        this.parteContactos = resp.data.slice(0, 50);
        this.loadingCtrl.dismiss();
      });       
  }  

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando'
    });
    loading.present();
  }

  async mostrarContacto(code: string) {

    let contacto = {};

    for (let i = 0; i < this.parteContactos.length; i++)
    {
      if (this.parteContactos[i].code === code)
      {
        contacto = this.parteContactos[i];
        break;
      }
    } 

    const modal = await this.modalCtrl.create({ 
      component: ContactoComponent,
      componentProps: { contacto }
     });

    await modal.present();    
  }




}
