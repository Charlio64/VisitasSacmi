import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PedidoComponent } from '../components/pedido/pedido.component';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  usuarios!: Observable<any>;

  constructor(private modalCtrl: ModalController,
              private dataService: DataService) {}

  ngOnInit() {
    this.usuarios = this.dataService.getUsuarios();
  }

  async mostrarPedido(id: number) {
    
    const modal = await this.modalCtrl.create({ 
      component: PedidoComponent,
      componentProps: { id }
     });
    await modal.present();    
  }


}
