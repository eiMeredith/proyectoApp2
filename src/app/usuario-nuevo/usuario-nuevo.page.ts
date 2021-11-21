import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  templateUrl: './usuario-nuevo.page.html',
  styleUrls: ['./usuario-nuevo.page.scss'],
})
export class UsuarioNuevoPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  logout(){
    this.router.navigate(['/home']);
  }

}
