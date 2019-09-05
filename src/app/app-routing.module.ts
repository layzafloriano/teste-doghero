import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DogListComponent } from './pages/dog-list/dog-list.component';
import { AddDogComponent } from './pages/add-dog/add-dog.component';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dogs',
    component: DogListComponent
  },
  {
    path: 'add-dog',
    component: AddDogComponent,
    canActivate: [AuthGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
