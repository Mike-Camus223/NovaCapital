import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../../core/services/photo.service';

interface firts {
  firtsPhoto: string;
  altfirts: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit {
buttonhover = false;
images: any[] = [];

constructor(private photoService: PhotoService) {}

firtsCarousel: firts[] = [
  {
    firtsPhoto: 'assets/images/11.png',
    altfirts: 'Bank'
  }
]

ngOnInit() {
  this.photoService.obtenerImagenes().then((images) => {
      this.images = images;
  });
}
}
