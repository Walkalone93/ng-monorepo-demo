import { Component, Input } from '@angular/core';

export interface IMenu {
  path: string;
  name: string;
}

@Component({
  selector: 'lib-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  @Input() menus: IMenu[] = [];

}
