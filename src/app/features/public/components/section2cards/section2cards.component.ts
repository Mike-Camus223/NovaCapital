import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

interface datanextcards {
  title: string;
  description: string;
  img: string;
  button: string;
  alrImg: string;
}

interface DataTwo {
  title: string;
  icon: string;
  description: string;
}

@Component({
  selector: 'app-section2cards',
  templateUrl: './section2cards.component.html',
  styleUrl: './section2cards.component.scss'
})
export class Section2cardsComponent implements OnInit {

  buttonhover = false;
  data: datanextcards[] = [];

  systemdata: datanextcards[] = [
    {
      title: 'Es el momento',
      description: 'Fortalecemos nuestro compromiso con la sociedad mediante iniciativas que marcan la diferencia y promueven el desarrollo sostenible.',
      img: 'assets/images/minicard.jpg',
      button: 'Explora nuestras iniciativas',
      alrImg: 'Es el momento',
    },
    {
      title: 'Refiere y Gana',
      description: 'Invita a tus amigos y familiares a unirse a NovaCapital. Gana recompensas exclusivas por cada recomendación exitosa.',
      img: 'assets/images/minicard2.jpg',
      button: 'Empieza a referir',
      alrImg: 'Refiere y Gana',
    },
    {
      title: 'Descubre NovaPlus+',
      description: 'Con NovaPlus+ accede a una banca premium con servicios personalizados, descuentos y más. ¡Aumenta tus beneficios!',
      img: 'assets/images/minicard3.jpg',
      button: 'Conoce NovaPlus+',
      alrImg: 'Descubre NovaPlus+',
    },
  ];

  seconddata: DataTwo[] = [];

  secondSystemData: DataTwo[] = [
    {
      title: 'Tus Claves',
      icon: 'fa-solid fa-lock',
      description: 'Genera tu usuario y claves de forma segura para proteger tu información.'
    },
    {
      title: 'Educación Financiera',
      icon: 'fa-solid fa-book',
      description: 'Accede a recursos que mejoran tu conocimiento financiero.'
    },
    {
      title: 'Tutoriales',
      icon: 'fa-solid fa-circle-question',
      description: 'Aprende sobre turnos, claves, blanqueo, transferencias y más.'
    },
    {
      title: 'No Caigas en Estafas',
      icon: 'fa-solid fa-user-shield',
      description: 'Sigue nuestros consejos para evitar fraudes y proteger tus datos.'
    }
  ]
  

  SecondSystemData$ = new Observable<DataTwo[]>(observer => {
    observer.next(this.secondSystemData),
    observer.complete();
  })


  systemDataObservable$ = new Observable<datanextcards[]>(observer => {
    observer.next(this.systemdata),
      observer.complete();
  });

  ngOnInit(): void {
    this.systemDataObservable$.subscribe(itemdata => {
      this.data = itemdata
    });
    this.SecondSystemData$.subscribe(itemtwo => {
      this.seconddata = itemtwo
    });
  }



  
}
