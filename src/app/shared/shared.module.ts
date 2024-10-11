import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './components/carousel/carousel.component';
import { PublicRoutingModule } from '../public/public-routing.module';
import { CarouselcardsComponent } from './components/carouselcards/carouselcards.component';
import { CardspublicgridComponent } from './components/cardspublicgrid/cardspublicgrid.component';
import { Section2cardsComponent } from './components/section2cards/section2cards.component';



@NgModule({
  declarations: [
    CarouselComponent,
    CarouselcardsComponent,
    CardspublicgridComponent,
    Section2cardsComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ],
  exports: [
    CarouselComponent,
    CarouselcardsComponent,
    CardspublicgridComponent,
    Section2cardsComponent
  ]
})
export class SharedModule { }
