import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/user/login/login.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { UpdateAccountComponent } from './components/user/update-account/update-account.component';
import { SplashComponent } from './components/splash/splash.component';
import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './Models/routes';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    UpdateAccountComponent,
    SplashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
