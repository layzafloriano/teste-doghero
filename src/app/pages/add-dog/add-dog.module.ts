import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDogComponent } from './add-dog.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AddDogComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule
  ]
})
export class AddDogModule { }
