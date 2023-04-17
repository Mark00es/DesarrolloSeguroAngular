import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyFormComponent } from './my-form/my-form.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,    
    HomepageComponent,
    LoginComponent,
    PiePaginaComponent,
    MyFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,  
    FormsModule,
    NgxCaptchaModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
