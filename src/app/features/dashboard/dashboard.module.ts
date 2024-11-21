import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashBaseComponent } from './pages/dash-base/dash-base.component';
import { SharedModule } from '../../shared/shared.module';
import { DashHomeComponent } from './pages/dash-home/dash-home.component';
import { UserCreditCardsComponent } from './pages/user-credit-cards/user-credit-cards.component';
import { UserTransactionsComponent } from './pages/user-transactions/user-transactions.component';
import { UserPaymentsComponent } from './pages/user-payments/user-payments.component';
import { TableTransactionsComponent } from './components/table-transactions/table-transactions.component';
import { GoalsPanelComponent } from './components/goals-panel/goals-panel.component';
import { CardsCarouselComponent } from './components/cards-carousel/cards-carousel.component';


@NgModule({
  declarations: [
    DashBaseComponent,
    DashHomeComponent,
    UserCreditCardsComponent,
    UserTransactionsComponent,
    UserPaymentsComponent,
    TableTransactionsComponent,
    GoalsPanelComponent,
    CardsCarouselComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
  ]
})
export class DashboardModule { }
