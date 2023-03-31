import { Component } from '@angular/core';
import { IMenu } from 'projects/ui-components/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  readonly menus: IMenu[] = [{
    path: '/home/about-us',
    name: 'About Us'
  }, {
    path: '/home/news',
    name: 'News'
  }, {
    path: '/dashboard/charts',
    name: 'Charts'
  }];

}
