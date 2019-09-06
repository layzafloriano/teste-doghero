import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogComponent } from './dog.component';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [DogComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class DogModule { }
