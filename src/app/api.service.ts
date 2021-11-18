import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

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
  constructor(private httpClient: HttpClient) { }

 
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
    let url = this.urlAPi + "users/" + id;
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
        console.table(this.listado);
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
        console.table(this.listado);
        },
        error =>
        {
          console.log("Error en la comunicación con el Servidor")
        })
      })
  }
}

