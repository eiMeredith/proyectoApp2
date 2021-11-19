import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  listado = [];
  posts = [];
  comments = [];
  datos : any;
  item : any;
  private urlAPi = 'https://jsonplaceholder.typicode.com/'; 
  constructor(private httpClient: HttpClient,
              public storage: Storage) {
                this.init();}
                async init(){
                  await this.storage.create();
                }

 
  getUsers ()
  {
    let url = this.urlAPi + "users/ ";
    this.listado = []; 
    return new Promise((resolve, reject) => {
      this.httpClient.get(url).subscribe((data: []) =>{
        resolve(data);
        data.forEach(item => { this.listado.push(item);})
        },
        error =>
        {
          console.log("Error en la comunicación con el Servidor");
        });
      });
    }
    // método para obtener solo a 1 usuario
  async getUser(id: String)
  {
    let url = this.urlAPi + "users/" + id + "/comments";
    return new Promise((resolve, reject) => {
      this.httpClient.get(url).subscribe((data: any) =>{
        resolve(data);
        this.item = data;
        },
        error =>
        {
          console.log("Error en la comunicación con el Servidor");
        });
      });
  }

  getPost (id : String) {
    this.posts =[];
    let url = this.urlAPi + 'users/' + id + '/posts';
    return new Promise((resolve, reject) => {
        this.httpClient.get(url).subscribe((data: any) =>{
        data.forEach(item => { this.posts.push(item);})
        },
        error =>
        {
          console.log("Error en la comunicación con el Servidor");
        });
      });
  }

  async getComment (id : String) {
    let url = this.urlAPi + 'posts/' + id + '/comments';
    this.comments = [];
    return new Promise((resolve, reject) => {
        this.httpClient.get(url).subscribe((data: []) =>{
        data.forEach(item => { this.comments.push(item);});
        for (let i = 0; i< this.comments.length; i++)
        {
          const elemento = i;
          this.storage.set("post"+elemento, this.comments[elemento]);
        }
        },
        error =>
        {
          console.log("Error en la comunicación con el Servidor")
          for (let i = 0; i < 5; i++){
            const elemento = i;
            this.storage.get("post"+String(elemento)).then(item => {this.comments.push(item)});
          }
        })
      })
  }
}

