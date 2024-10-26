import { Component, OnInit } from '@angular/core';
import { map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';


interface firts {
  minititle: string;
  title: string;
  description: string;
  firtsPhoto: string;
  altfirts: string;
}


@Component({
  selector: 'app-cardspublicgrid',
  templateUrl: './cardspublicgrid.component.html',
  styleUrl: './cardspublicgrid.component.scss'
})
export class CardspublicgridComponent implements OnInit {

  data: firts[] = [];

  CardData: firts[] = [
    {
      minititle: 'Transacción Segura',
      title: 'Protección en Cada Operación',
      description: 'Tus transacciones en NovaCapital están protegidas con encriptación avanzada, garantizando seguridad y confianza en cada movimiento.',
      firtsPhoto: 'assets/images/card1.png',
      altfirts: 'Transacción'
    },
    {
      minititle: 'Seguros a tu Medida',
      title: 'Protección Integral para Tu Futuro',
      description: 'En NovaCapital ofrecemos una variedad de seguros personalizados que se adaptan a tus necesidades. Protege tu hogar, auto y salud con nuestras soluciones confiables.',
      firtsPhoto: 'assets/images/6.jpg',
      altfirts: 'Seguros',
    },
    {
      minititle: 'Invierte en tu Futuro',
      title: 'Inversiones a tu medida',
      description: 'NovaCapital te ofrece opciones de inversión para hacer crecer tu dinero, como fondos mutuos y acciones.',
      firtsPhoto: 'assets/images/9.jpg',
      altfirts: 'Inversiones',
    },
    {
      minititle: 'App de Confianza',
      title: 'Tu Banca en la Palma de Tu Mano',
      description: 'Realiza operaciones bancarias rápidamente desde cualquier lugar con la app de NovaCapital.',
      firtsPhoto: 'assets/images/8.jpg',
      altfirts: 'Innovación Financiera',
    },
  ]

  ImageSystem$ = new Observable<firts[]>(observer => {
    observer.next(this.CardData);
    observer.complete();
  });

  ngOnInit(): void {
    this.ImageSystem$.subscribe(ItemconverterData => {
      this.data = ItemconverterData
    })
  }


}


