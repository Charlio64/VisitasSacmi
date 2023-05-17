import { Component, OnInit } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-cod-cliente',
  templateUrl: './cod-cliente.component.html',
  styleUrls: ['./cod-cliente.component.scss'],
})
export class CodClienteComponent  implements OnInit {

  codigos: string[] = [];
  codigo: string = '';

  constructor(private modalCtrl: ModalController,
              private loadingCtrl: LoadingController,
              private dataService: DataService) { }

  ngOnInit() {

    this.showLoading();
    this.dataService.getContactos()
      .subscribe(resp => {
        // Sólo los 50 primeros
        for (let i = 0; i < 50; i++) {
          this.codigos[i] = resp.data[i].code;          
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

  seleccionar(codigo: string) {
    this.codigo = codigo;
    return this.modalCtrl.dismiss(this.codigo);    
  }

}
