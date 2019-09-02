import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ControlMessageComponent } from './control-message/control-message.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [HeaderComponent, ControlMessageComponent, ListComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    ControlMessageComponent,
    ListComponent
  ]
})
export class ComponentsModule { }
