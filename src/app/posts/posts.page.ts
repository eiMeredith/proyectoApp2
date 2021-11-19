import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {
  posts = [];
  datos : any;
  constructor(private api:ApiService,
              private router : Router,
              public storage:Storage) { }

  ngOnInit() {
    this.storage.clear();
    this.datos = localStorage.getItem("id")
    this.api.getPost(this.datos);
    this.posts = this.api.posts;
  }

  logout(){
    localStorage.clear();
    this.storage.clear();
    this.router.navigate(['/home']);
  }
}
