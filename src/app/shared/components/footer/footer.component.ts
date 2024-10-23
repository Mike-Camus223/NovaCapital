import { Component } from '@angular/core';

interface IconFooter {
  icon: string;
  url: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {

footerDataD:string = '© 2024 Banco NovaCapital S.A. Todos los derechos reservados. App creada por Michael Campos (Allendev).';

  datafooterIcon: IconFooter[] = [
    { icon: 'fa-brands fa-x-twitter',
      url: 'https://x.com/?lang=es'
    }, 
    { icon: 'fa-brands fa-facebook-f',
      url: 'https://www.facebook.com/?locale=es_LA&refsrc=deprecated&_rdr'
     }, 
    { icon: 'fa-brands fa-instagram',
      url: 'https://www.instagram.com/?hl=es'
     },
    { icon: 'fa-brands fa-youtube',
      url: 'https://www.youtube.com/'
    },
    {
      icon: 'fa-brands fa-apple',
      url: 'https://www.apple.com/la/app-store/',
    },
    {
      icon: 'fa-brands fa-google-play',
      url: 'https://play.google.com/store/apps?hl=es_AR',
    }
  ];
}
