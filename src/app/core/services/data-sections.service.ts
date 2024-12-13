import { Injectable } from '@angular/core';
import { SectionHelp} from '../models/dataSec.interface';

@Injectable({
  providedIn: 'root'
})
export class DataSectionsService {

  DataofSectionHelp: SectionHelp[] = [
    {
      icon: 'fa-location-dot',
      title: 'Sucursales y cajeros',
      linkName: 'Siempre cerca tuyo',
      color: '#35d4d4',
      link: '',
    },
    {
      icon: 'fa-paper-plane',
      title: 'Atención al cliente',
      linkName: 'Contactate con nosotros',
      color: '#3552d4',
      link: '',
    },
    {
      icon: 'fa-bell',
      title: 'Ayuda urgente',
      linkName: 'Cuando lo necesités',
      color: '#eed463',
      link: '',
    },
  ];
  constructor() { }
}
