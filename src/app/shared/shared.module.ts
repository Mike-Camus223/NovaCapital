import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { MaskCardPipe } from './pipes/mask-card.pipe';
import { CurrencyArgPipe } from './pipes/currency-arg.pipe';
import { UiModule } from './ui.module';

@NgModule({
  declarations: [
    MaskCardPipe,
    CurrencyArgPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    UiModule
  ],
  exports: [
    RouterModule,
    FormsModule,
    MaskCardPipe,
    CurrencyArgPipe,
    UiModule
  ],
})
export class SharedModule { }
