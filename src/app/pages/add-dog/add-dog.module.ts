import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDogComponent } from './add-dog.component';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [AddDogComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class AddDogModule { }
