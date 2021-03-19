import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app';
  items: NbMenuItem[] = [
    {
      title: 'Dashboard',
      icon: 'home-outline',
      link: 'dashboard',
    },
    {
      title: 'Products',
      icon: 'grid-outline',
      link: 'products',
    },
    {
      title: 'Users',
      icon: 'people-outline',
      link: 'users',
    },
  ];
  constructor() {}
}
