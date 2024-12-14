import { Component, OnInit, OnDestroy } from '@angular/core';
import { PhotoService } from '../../../../core/services/photo.service';

interface ButtonStyle {
  buttonStyle: 'buttonPri1' | 'buttonPri2' | 'buttonPri3';
  backgroundClass: string;
}

interface ItemList {
  dataItem: string;
  dataItem2: string;
  dataItem3: string;
}

interface dataAnnouncement {
  firtsPhoto: string;
  altfirts: string;
  subtitle: string;
  title: string;
  infor: string;
  style: ButtonStyle;
  itemlist: ItemList;
  backgroundImage: boolean;
  Pages: 'Page1' | 'Page2' | 'Page3';
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {
  firtsCarousel: dataAnnouncement[] = [
    {
      firtsPhoto: 'assets/images/11.png',
      altfirts: 'Bank',
      subtitle: 'Impulsa tus sueños y hazlos tangibles con NovaCapital',
      title: 'Transformando tus Metas en Realidad',
      infor: 'Nuestro enfoque es convertir tus metas financieras en realidad. Con soluciones personalizadas y un equipo comprometido, te ofrecemos el apoyo necesario para alcanzar tus objetivos, ya sea ahorrar, invertir o hacer crecer tu patrimonio. El propósito es acompañarte en cada paso hacia el éxito financiero.',
      style: {
        backgroundClass: 'bg-firts',
        buttonStyle: 'buttonPri1',
      },
      itemlist: {
        dataItem: '',
        dataItem2: '',
        dataItem3: '',
      },
      backgroundImage: false,
      Pages: 'Page1',
    },
    {
      firtsPhoto: 'assets/images/4.jpg',
      altfirts: 'Financial Security',
      subtitle: 'Tu Seguridad Financiera es Nuestra Prioridad',
      title: 'Confianza sólida que protege tu futuro seguro',
      infor: 'En NovaCapital, la seguridad es nuestro compromiso. Con tecnología de vanguardia y estrictos protocolos de protección, garantizamos que tus datos y transacciones estén siempre seguros. En cada paso de tu recorrido financiero, estamos aquí para respaldarte con integridad y confianza.',
      style: {
        backgroundClass: 'bg-second',
        buttonStyle: 'buttonPri2',
      },
      itemlist: {
        dataItem: '',
        dataItem2: '',
        dataItem3: '',
      },
      backgroundImage: true,
      Pages: 'Page2',
    },
    {
      firtsPhoto: 'assets/images/Novacapitalcreditcard.jpg',
      altfirts: 'NovaCapital Card',
      subtitle: 'Solicitá tu tarjeta 100% online',
      title: 'Dejá de pensarlo y sacá tu tarjeta NovaCapital',
      infor: 'Sacala y llevate desde $30.000 hasta un pasaje a Río. Además contás con:',
      itemlist: {
        dataItem: 'Tu tarjeta bonificada por 9 meses.',
        dataItem2: 'Reintegros en supermercados, tiendas para mascotas, heladerías y mucho más.',
        dataItem3: 'Beneficios exclusivos en teatros y recitales.',
      },
      style: {
        backgroundClass: 'bg-third',
        buttonStyle: 'buttonPri3',
      },
      backgroundImage: true,
      Pages: 'Page3',
    }
  ];
  buttonhover: boolean = false;
  currentIndex = 0;
  transformStyle = 'translateX(0%)';
  autoplayInterval: any;

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
    this.photoService.obtenerImagenes().then((images) => {
    });
    this.startAutoplay();
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.firtsCarousel.length;
    this.updateTransformStyle();
  }
  
  goToSlide(index: number): void {
    this.currentIndex = index;
    this.updateTransformStyle();
    this.resetAutoplay();
  }

  updateTransformStyle(): void {
    this.transformStyle = `translateX(-${this.currentIndex * 100}%)`;
  }

  startAutoplay(): void {
    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
    }, 7000); 
  }

  stopAutoplay(): void {
    clearInterval(this.autoplayInterval);
  }

  resetAutoplay(): void {
    this.stopAutoplay();
    this.startAutoplay();
  }
}
