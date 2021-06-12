import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { AddComponent } from './contact/add/add.component';
import { DeleteComponent } from './contact/delete/delete.component';
import {EditComponent} from './contact/edit/edit.component';
import { ListComponent } from './contact/list/list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponentComponent } from './pagenotfound-component/pagenotfound-component.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'contact/edit/:id',component:EditComponent,canActivate:[AuthGuardService]},
  {path:'contact/delete/:id',component:DeleteComponent,canActivate:[AuthGuardService]},
  {path:'login',component:LoginComponent},
  {path:'contact/add',component:AddComponent,canActivate:[AuthGuardService]},
  {path:'register',component:RegisterComponent},
  {path:'contact/list',component:ListComponent,canActivate:[AuthGuardService]},
  {path:'**',component:PagenotfoundComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
