import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu.interface';
import { IUser } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menu: Menu[];

  constructor() { }

  ngOnInit() {
    this.setMenuByProfile();
  }

  setMenuByProfile() {
    const userData = localStorage.getItem('user');
    const userRole = userData ? JSON.parse(userData).role : '';

    switch (userRole) {
      case 'dogwalker':
        this.setMenuDogwalker();
        break;
      case 'user':
        this.setMenuClient();
        break;
      default:
        this.setMenuOther();
        break;
    }
  }

  setMenuDogwalker() {
    this.menu = [
      {
        text: 'Home',
        path: '/',
      },
      {
        text: 'Clients',
        path: '/clients',
      },
      {
        text: 'Dogs',
        path: '/dogs',
      }
    ];
  }

  setMenuClient() {
    this.menu = [
      {
        text: 'Home',
        path: '/',
      },
      {
        text: 'Dog Walkers',
        path: '/dog-walkers',
      },
      {
        text: 'Add Dog',
        path: '/add-dog',
      },
    ];
  }

  setMenuOther() {
    this.menu = [
      {
        text: 'Login',
        path: '/login',
      },
      {
        text: 'Signup',
        path: '/signup',
      }
    ]
  }

}
