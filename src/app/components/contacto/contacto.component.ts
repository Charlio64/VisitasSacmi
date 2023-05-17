import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Contacto } from '../../interfaces/interfaces';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
})
export class ContactoComponent  implements OnInit {

  @Input() contacto!: Contacto;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  volver() {
    this.modalCtrl.dismiss();
  }

}
