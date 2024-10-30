import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashBaseComponent } from './pages/dash-base/dash-base.component';
import { SharedModule } from '../../shared/shared.module';
import { UiModule } from '../../shared/ui.module';
import { DashHomeComponent } from './pages/dash-home/dash-home.component';
import { UserCreditCardsComponent } from './pages/user-credit-cards/user-credit-cards.component';
import { UserTransactionsComponent } from './pages/user-transactions/user-transactions.component';
import { UserPaymentsComponent } from './pages/user-payments/user-payments.component';


@NgModule({
  declarations: [
    DashBaseComponent,
    DashHomeComponent,
    UserCreditCardsComponent,
    UserTransactionsComponent,
    UserPaymentsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    UiModule,
  ]
})
export class DashboardModule { }
