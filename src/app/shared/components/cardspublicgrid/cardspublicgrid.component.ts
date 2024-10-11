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
      firtsPhoto: 'assets/images/card2.png',
      altfirts: 'Seguros',
    },
    {
      minititle: 'Invierte en tu Futuro',
      title: 'Oportunidades de Inversión Adaptadas a Ti',
      description: 'NovaCapital te ofrece una variedad de opciones de inversión para ayudarte a hacer crecer tu dinero. Desde fondos mutuos hasta acciones, encuentra la mejor estrategia para tus objetivos financieros.',
      firtsPhoto: 'assets/images/card5.png',
      altfirts: 'Inversiones',
    },
    {
      minititle: 'App de Confianza',
      title: 'Tu Banca en la Palma de Tu Mano',
      description: 'Con la app de NovaCapital, realiza operaciones bancarias de manera rápida y fácil desde cualquier lugar. Disfruta de herramientas modernas y eficientes para gestionar tus finanzas.',
      firtsPhoto: 'assets/images/card4.png',
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


