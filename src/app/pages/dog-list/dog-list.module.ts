import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogListComponent } from './dog-list.component';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    DogListComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class DogListModule { }
