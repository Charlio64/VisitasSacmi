import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';



@Component({
  selector: 'app-propietario',
  templateUrl: './propietario.component.html',
  styleUrls: ['./propietario.component.scss'],
})
export class PropietarioComponent  implements OnInit {

  propietarios: string[] = [];
  propietario: string = '';

  constructor(private modalCtrl: ModalController,
              private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getVendedores()
      .subscribe(resp => {        
        for (let i = 0; i < resp.data.length; i++) {
          this.propietarios[i] = resp.data[i].nombre;          
        }        
      });
  }

  volver() {
    return this.modalCtrl.dismiss('Seleccione');
  }

  seleccionar(propietario: string) {
    this.propietario = propietario;
    return this.modalCtrl.dismiss(this.propietario);    
  }

}
