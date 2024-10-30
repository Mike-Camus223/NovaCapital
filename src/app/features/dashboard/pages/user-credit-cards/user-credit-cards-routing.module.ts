import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCreditCardsComponent } from './user-credit-cards.component';

const routes: Routes = [
  {
    path: '',
    component: UserCreditCardsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserCreditCardsRoutingModule { }
