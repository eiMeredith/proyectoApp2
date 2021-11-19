import { Injectable } from '@angular/core';
import { initialize } from '@ionic/core';
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
}

