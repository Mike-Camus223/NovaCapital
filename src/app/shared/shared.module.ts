import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselcardsComponent } from './components/carouselcards/carouselcards.component';
import { CardspublicgridComponent } from './components/cardspublicgrid/cardspublicgrid.component';
import { Section2cardsComponent } from './components/section2cards/section2cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    CarouselComponent,
    CarouselcardsComponent,
    CardspublicgridComponent,
    Section2cardsComponent,
    FooterComponent,
  NavbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CarouselComponent,
    CarouselcardsComponent,
    CardspublicgridComponent,
    Section2cardsComponent,
    FooterComponent,
    NavbarComponent
  ],
})
export class SharedModule { }
