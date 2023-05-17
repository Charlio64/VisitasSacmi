import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.component.html',
  styleUrls: ['./tipo.component.scss'],
})
export class TipoComponent  implements OnInit {

  tipos: string[] = [];
  tipo: string = '';

  constructor(private modalCtrl: ModalController,
              private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getTipoInt()
      .subscribe(resp => {
        for (let i = 0; i < resp.data.length; i++) {
          this.tipos[i] = resp.data[i].descripcion;          
        }
      });
  }

  volver() {
    return this.modalCtrl.dismiss('Seleccione');
  }

  seleccionar(tipo: string) {
    this.tipo = tipo;
    return this.modalCtrl.dismiss(this.tipo);    
  }

}
