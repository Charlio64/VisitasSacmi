import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Visita } from '../../interfaces/interfaces';


@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.scss'],
})

export class ActividadComponent  implements OnInit {

  @Input() visita!: Visita;  

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  volver() {
    this.modalCtrl.dismiss();
  }

}
