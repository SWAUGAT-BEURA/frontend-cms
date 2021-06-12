import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import {HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponentComponent } from './pagenotfound-component/pagenotfound-component.component'
import {FormsModule} from '@angular/forms';
import { ListComponent } from './contact/list/list.component';
import { AddComponent } from './contact/add/add.component';
import { EditComponent } from './contact/edit/edit.component';
import { DeleteComponent } from './contact/delete/delete.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    RegisterComponent,
    LoginComponent,
    PagenotfoundComponentComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    DeleteComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
