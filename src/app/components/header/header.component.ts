import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu.interface';

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
    const userData = { role: 'dogwalker' };
    if (userData.role === 'dogwalker') {
      this.setMenuDogwalker();
    } else {
      this.setMenuClient();
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
    ];
  }

}
