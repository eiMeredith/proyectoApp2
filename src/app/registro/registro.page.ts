import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(public toastController: ToastController) {
   }

  ngOnInit() {
  }

  async registro(nombre: HTMLInputElement){
    
    let usuario = nombre.value;

    if (usuario.trim().length == 0 || usuario.trim().length <= 2) {
      const toast = await this.toastController.create({
        message: "Usuario inválido, ingreselo nuevamente",
        duration: 2000,
        color: 'danger'
      });
      toast.present();
      nombre.value = "";
      return;
    }

  }
}
