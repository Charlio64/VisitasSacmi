import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-estado',
  templateUrl: './estado.component.html',
  styleUrls: ['./estado.component.scss'],
})
export class EstadoComponent  implements OnInit {

  estados: string[] = ['En proceso', 'Completada', 'Pendiente', 'Cancelada'];
  estado: string = '';

  constructor(private modalCtrl: ModalController,
              private dataService: DataService) { }

  ngOnInit() {}

  volver() {
    return this.modalCtrl.dismiss('Seleccione');
  }

  seleccionar(estado: string) {
    this.estado = estado;
    return this.modalCtrl.dismiss(this.estado);    
  }


}
