import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './layouts/register/register.component';
import { LoginComponent } from './layouts/login/login.component';

const routes: Routes = [
  {
    path: 'register', component: RegisterComponent
  },
  { path: 'online-banking', component: LoginComponent},
  {
    path: '**', redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
