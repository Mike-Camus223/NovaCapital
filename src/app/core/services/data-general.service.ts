import { Injectable } from '@angular/core';
import { PageDoubleDataInter, PageTripleDataInter } from '../models/doblePage.interface';

@Injectable({
  providedIn: 'root'
})
export class DataGeneralService {

  dataPageDouble: PageDoubleDataInter[] = [
    {
      title: 'Depositá tu sueldo en NovaCapital y llevate hasta $220.000',
      info: 'Si traés tu sueldo a NovaCapital, te regalamos hasta $220.000 en tu tarjeta de crédito NovaCapital. Además, vas a tener tu cuenta bonificada y accedés a ahorros exclusivos de hasta 30%.',
      button: 'Conocer más',
      link: '#asdasd',
      pages: {
        pagesDouble: 'PageDouble1',
        BackgroundPages: 'app-doublepage1',
        pageActive: true,
      },
      imagenBackground: 'assets/images/6.jpg',
    },
    {
      title: 'Nos importa la sostenibilidad',
      info: 'Conocé cómo NovaCapital contribuye para crear un futuro más sostenible.',
      button: 'Conocer más',
      link: 'asdasda',
      pages: {
        pagesDouble: 'PageDouble2',
        BackgroundPages: 'app-doublepage2',
        pageActive: true,
      },
      imagenBackground: 'assets/images/4.jpg',
    },
    {
      title: 'Tus ahorros, nuestra prioridad',
      info: 'En NovaCapital, tus ahorros crecen con beneficios exclusivos. Abrí tu plazo fijo hoy mismo y obtené tasas preferenciales.',
      button: 'Abrir plazo fijo',
      link: '#plazofijo',
      pages: {
        pagesDouble: 'PageDouble3',
        BackgroundPages: 'app-doublepage3',
        pageActive: true,
      },
      imagenBackground: 'assets/images/plazofijo.jpg',
    },
  ];

  dataPageTriple: PageTripleDataInter[] = [
    {
      info: { info1: 'Mantente informado sobre las últimas novedades y actualizaciones del sistema financiero que podrían impactar tus productos y decisiones financieras.' },
      buttons: { button1: 'Más información' },
      link: '',
      pages: {
        pagesTriple: 'PageTriple1',
        pageTripleActive: true,
      }
    },
    {
      info: { info2: 'Consulta y descarga fácilmente los contratos de todos los productos financieros.' },
      buttons: { button2: 'Acceder' },
      link: '',
      pages: {
        pagesTriple: 'PageTriple1',
        pageTripleActive: true,
      }
    },
    {
      info: { info3: 'Si necesitas ayuda o deseas reportar un inconveniente, registra tu reclamo aquí y recibe soporte personalizado en el menor tiempo posible.' },
      buttons: { button3: 'Más información' },
      link: '',
      pages: {
        pagesTriple: 'PageTriple1',
        pageTripleActive: true,
      }
    },
    {
      info: { info1: 'Redondea tus compras y ahorra automáticamente la diferencia. Activa el ahorro inteligente y comienza a ahorrar sin esfuerzo.' },
      buttons: { button1: 'Botón 1' },
      link: '',
      pages: {
        pagesTriple: 'PageTriple2',
        pageTripleActive: false,
      }
    },
    {
      info: { info2: 'Envía dinero al extranjero con transferencias instantáneas y tasas de cambio en tiempo real. ¡Sin comisiones ocultas!' },
      buttons: { button2: 'Botón 2' },
      link: '',
      pages: {
        pagesTriple: 'PageTriple2',
        pageTripleActive: false,
      }
    },
    {
      info: { info3: 'Recibe recomendaciones de inversión basadas en tus metas financieras. Invierte de forma fácil y personalizada.' },
      buttons: { button3: 'Botón 3' },
      link: '',
      pages: {
        pagesTriple: 'PageTriple2',
        pageTripleActive: false,
      }
    }
  ];

  activatePageDouble(pageName: 'PageDouble1' | 'PageDouble2' | 'PageDouble3') {
    this.dataPageDouble.forEach(item => {
      item.pages.pageActive = item.pages.pagesDouble === pageName;
    });
  }

  activatePageTriple(Page: 'PageTriple1' | 'PageTriple2') {
    this.dataPageTriple.forEach(item => {
      item.pages.pageTripleActive = item.pages.pagesTriple === Page;
    })
  }

  constructor() { }
}
