import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { NewsComponent } from './pages/news/news.component';


@NgModule({
  declarations: [
    HomeComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule,
  ],
})
export class PublicModule { }
