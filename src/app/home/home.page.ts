import { Component } from '@angular/core';
import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
}from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController) {

    this.formularioLogin = this.fb.group({
      'nombre': new FormControl ("", Validators.required),
      'password': new FormControl ("", Validators.required)
    })
  }

  async ingresar(){
    var l = this.formularioLogin.value;
    if(this.formularioLogin.invalid){
      const alert = await this.alertController.create({
        header:'Datos incompletos',
        message: 'Tienes que completar los campos.',
        buttons: ['OK']
      });
  
      await alert.present();
      return;
    }
  }
}
