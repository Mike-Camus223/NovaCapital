import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    SharedModule
  ],
})
export class PublicModule { }
