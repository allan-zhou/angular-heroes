import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  currentUser: User;

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {
    this.currentUser =JSON.parse(localStorage.getItem('CurrentUser'));
    if(!this.currentUser){
      this.router.navigateByUrl('/login');
    }    
  }
}

