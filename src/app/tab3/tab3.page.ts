import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { OfertaComponent } from '../components/oferta/oferta.component';
import { DataService } from '../services/data.service';
import { Vendedor } from '../interfaces/interfaces';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  vendedores: Vendedor[] = [];

  constructor(private modalCtrl: ModalController,
              private dataService: DataService) {}

  ngOnInit() {
    
    this.dataService.getVendedores()
    .subscribe(resp => {
      this.vendedores = resp.data;       
    });
  }
  
  async mostrarOferta(code: string) {

    let vendedor = {};

    for (let i = 0; i < this.vendedores.length; i++)
    {
      if (this.vendedores[i].code === code)
      {
        vendedor = this.vendedores[i];
        break;
      }
    } 

    const modal = await this.modalCtrl.create({ 
      component: OfertaComponent,
      componentProps: { vendedor }
     });

    await modal.present();    
  }


}
