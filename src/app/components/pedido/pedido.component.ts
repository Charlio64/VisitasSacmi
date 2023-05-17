import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss'],
})
export class PedidoComponent  implements OnInit {

  @Input() id!: number;
  user: any = {};

  constructor(private modalCtrl: ModalController,
              private dataService: DataService) { }

  ngOnInit() {

    this.dataService.getUsuario(this.id)
      .subscribe( resp => {
        this.user = resp;       
      });
  }

  volver() {
    this.modalCtrl.dismiss();
  }

}
