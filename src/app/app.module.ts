import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

import { jwtTokenGetter } from './helpers/token';
import { AppRoutingModule } from './app-routing.module';
import { Interceptor } from './interceptor.module';
import { AppComponent } from './app.component';
import { HomeModule } from './pages/home/home.module';
import { LoginModule } from './pages/login/login.module';
import { DogListModule } from './pages/dog-list/dog-list.module';
import { AddDogModule } from './pages/add-dog/add-dog.module';
import { DogModule } from './pages/dog/dog.module';
import { SignupModule } from './pages/signup/signup.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Interceptor,
    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter
      }
    }),
    HomeModule,
    LoginModule,
    DogListModule,
    AddDogModule,
    DogModule,
    SignupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
