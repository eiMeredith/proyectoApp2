import { Injectable } from '@angular/core';
import { initialize } from '@ionic/core';
//importar storage
import {Storage} from '@ionic/storage';



@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private storage : Storage) {
    this.init();

   }

   //crear storage
  async init()
  {
    await this.storage.create();

  }

  //ingresar datos
  async agregarKey(key: string, valor :string)
  {
    await this.storage.set(key, valor);
  }
  
  //key autoincrementable opcional
  async agregar (valor: string)
  {
    let id = await this.storage.length()+ 1;
    await this.storage.set(id.toString(), valor);

  }

  async rescatar(key:string)
  {
    return await this.storage.get(key);
  }

  listar()
  {
    let listado = []
    this.storage.forEach((v,k) => {listado.push(v); })
    return listado;
  }

  eliminar (key:string)
  {
    this.storage.remove(key);
  }
}

