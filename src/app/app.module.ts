import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule, MdInputModule, MdCardModule, MdSidenavModule, MdIconModule, MdMenuModule } from '@angular/material';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { MainComponent } from './modules/main/main.component';
import {
    FormsModule,
    ReactiveFormsModule
} from '@angular/forms';
import {
    HttpModule,
    Http,
    XHRBackend,
    RequestOptions
} from '@angular/http';
import {
    RouterModule
} from '@angular/router';
import {
    LoginService
} from './services/login.service';
import {
    routes
} from './app.routes';
import {
    MainService
} from './services/main.service';
import {
    httpFactory
} from './services/http.factory';
import {
    InterceptedHttp
} from './services/http.interceptor';
import { 
   FlexLayoutModule 
} from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule, 
    MdCheckboxModule,
    MdInputModule,
    MdCardModule,
    MdSidenavModule,
    MdIconModule,
    FlexLayoutModule,
    MdMenuModule,
    RouterModule.forRoot(routes, { useHash: true }),
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [
    LoginService,
    MainService,
    {
      provide: InterceptedHttp,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
