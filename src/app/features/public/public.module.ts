import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { NewsComponent } from './pages/news/news.component';
import { CardspublicgridComponent } from './components/cardspublicgrid/cardspublicgrid.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselcardsComponent } from './components/carouselcards/carouselcards.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Section2cardsComponent } from './components/section2cards/section2cards.component';
import { SharedModule } from '../../shared/shared.module';
import { AuthModule } from '../../core/auth/auth.module';


@NgModule({
  declarations: [
    HomeComponent,
    NewsComponent,
    CardspublicgridComponent,
    CarouselComponent,
    CarouselcardsComponent,
    FooterComponent,
    NavbarComponent,
    Section2cardsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PublicRoutingModule,
    AuthModule
],
  exports: [
    HomeComponent,
    NewsComponent,
    CardspublicgridComponent,
    CarouselComponent,
    CarouselcardsComponent,
    FooterComponent,
    NavbarComponent,
    Section2cardsComponent
  ]
})
export class PublicModule { }
