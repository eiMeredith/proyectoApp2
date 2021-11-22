import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  listado = [];

  constructor(private api : ApiService,
              public toastController: ToastController,
              public router : Router) {
  }

  ngOnInit(){
    this.api.getUsers();
    this.listado = this.api.listado;
    localStorage.clear();
  }

  async ingresar(nombre: HTMLInputElement, clave: HTMLInputElement){

    let listado = this.api.listado;
    let usuario = nombre.value;
    let contraseña = clave.value;
    
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

    else if (contraseña != "1234") {
      const toast = await this.toastController.create({
        message: "Contraseña inválido, ingresela nuevamente",
        duration: 2000,
        color: 'danger'
      });
      toast.present();
      clave.value = "";
      return;
    }

    for (let usuarios of this.listado){
      if (usuarios.username == nombre.value && contraseña == "1234"){
        localStorage.setItem('id',usuarios.id);
        console.log("Se inició con el usuario:", usuarios.name, "id:",usuarios.id);
        this.router.navigate(['/home']);
      }
    }

    if (usuario != nombre.value) {
      const toast = await this.toastController.create({
        message: "El usuario no existe.",
        duration: 2000,
        color: 'danger'
      });
      toast.present();
      nombre.value = "";
      clave.value = "";
      return;
    }
    else {
      const toast = await this.toastController.create({
        message: "Usuario ingresado correctamente", 
        duration: 500,
        color: 'success'
      });
      toast.present();
      nombre.value = "";
      clave.value = "";
      this.router.navigateByUrl('/posts')
      return;
    }

  }
}
