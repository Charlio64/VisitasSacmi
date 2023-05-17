import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
})
export class ClienteComponent  implements OnInit {

  clientes: string[] = [];
  cliente: string = '';

  constructor(private modalCtrl: ModalController,
              private loadingCtrl: LoadingController,
              private dataService: DataService) { }

  ngOnInit() {

    this.showLoading();
    this.dataService.getContactos()
      .subscribe(resp => {
        // Sólo los 50 primeros
        for (let i = 0; i < 50; i++) {
          this.clientes[i] = resp.data[i].nombre;          
        }
        this.loadingCtrl.dismiss();
      });
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando'
    });
    loading.present();
  }

  volver() {
    return this.modalCtrl.dismiss('Seleccione');
  }

  seleccionar(cliente: string) {
    this.cliente = cliente;
    return this.modalCtrl.dismiss(this.cliente);    
  }

}
