import { Injectable } from '@angular/core';

interface ImagesCarouselModel {
  itemphoto: string;
  namePhoto: string;
  descriptionPhoto: string;
}

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  obtenerImagenes(): Promise<ImagesCarouselModel[]> {
    return Promise.resolve([
      {
        itemphoto: 'assets/images/3.jpg',
        namePhoto: 'Bank',
        descriptionPhoto: 'Bank'
      },
      {
        itemphoto: 'assets/images/4.jpg',
        namePhoto: 'Bank',
        descriptionPhoto: 'Bank'
      },
      {
        itemphoto: 'assets/images/5.jpg',
        namePhoto: 'Bank',
        descriptionPhoto: 'Bank'
      },
    ])
  }

  constructor() { }
}
