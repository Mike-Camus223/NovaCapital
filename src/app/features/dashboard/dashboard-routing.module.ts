import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBaseComponent } from './pages/dash-base/dash-base.component';

const routes: Routes = [
  {
    path: '',
    component: DashBaseComponent,
    children: [
      {
        path: 'state',
        loadChildren: () => import('./pages/dash-home/dash-home.module').then(m => m.DashHomeModule),
      },
      {
        path: 'my-cards',
        loadChildren: () => import('./pages/user-credit-cards/user-credit-cards.module').then(m => m.UserCreditCardsModule),
      },
      {
        path: 'payments',
        loadChildren: () => import('./pages/user-payments/user-payments.module').then(m => m.UserPaymentsModule),
      },
      {
        path: 'transactions',
        loadChildren: () => import('./pages/user-transactions/user-transactions.module').then(m => m.UserTransactionsModule),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'dashboard'
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
