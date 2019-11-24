import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeheaderComponent } from './welcomeheader/welcomeheader.component';
import { LoginAreaComponent } from './login-area/login-area.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeheaderComponent,
    LoginAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
