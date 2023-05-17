import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Vendedor } from '../../interfaces/interfaces';


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.scss'],
})
export class OfertaComponent  implements OnInit {

  @Input() vendedor!: Vendedor;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  volver() {
    this.modalCtrl.dismiss();
  }

}
