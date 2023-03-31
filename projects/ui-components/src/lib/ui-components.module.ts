import { MenuModule } from './menu/menu.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  imports: [
    CommonModule,
    MenuModule
  ],
  exports: [
    MenuModule
  ]
})
export class UiComponentsModule { }
