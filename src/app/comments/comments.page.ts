import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit {

  listado = [];
  posts = [];
  comments = [];
  comentario: any;

  constructor(private api: ApiService,
              public activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(async p => {
      const id = p.get('id');
      console.log("Está viendo los comentarios del post:",id);
      this.comentario = id;
      this.api.getComment(this.comentario);
      this.comments = this.api.comments;
    })
  }
}