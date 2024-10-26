import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard', loadChildren:() => import('./features/dashboard/dashboard.module').then(m=> m.DashboardModule)
  },
  {
    path: '', loadChildren:() => import('./features/public/public.module').then(m => m.PublicModule)
  },
  {
    path: 'auth', loadChildren:() => import('./core/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
