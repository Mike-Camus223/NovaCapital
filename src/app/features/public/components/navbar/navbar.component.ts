import { Component } from '@angular/core';

interface ButtonAuth {
  button: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

  value: string = '';

  buttonAuthSystems: ButtonAuth[] = [
    {
      button: 'Hacete Cliente',
      icon: 'fa-solid fa-user-tie',
      link: '/register'
    },
    {
      button: 'Online Banking',
      icon: 'fa-solid fa-arrow-right-to-bracket',
      link: ''
    },
  ];

  toggleForm(index: number): void {
    if (index === 1) {
      const collapseElement = document.getElementById('collapseaqui');
      const bodyElement = document.body;

      if (collapseElement) {
        const isAtTop = window.scrollY === 0;

        if (!isAtTop) {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });

          setTimeout(() => {
            collapseElement.classList.toggle('open');
            const isOpen = collapseElement.classList.contains('open');

            if (isOpen) {
              bodyElement.style.overflow = 'hidden';
            } else {
              bodyElement.style.overflow = '';
            }
          }, 500);
        } else {

          collapseElement.classList.toggle('open');
          const isOpen = collapseElement.classList.contains('open');
          if (isOpen) {
            bodyElement.style.overflow = 'hidden';
          } else {
            bodyElement.style.overflow = '';
          }
        }
      }
    }
  }


  CerrarCollapse(): void {
    const collapseElement = document.getElementById('collapseaqui');
    const bodyElement = document.body;

    if (collapseElement) {
      collapseElement.classList.remove('open');
      bodyElement.style.overflow = '';
    }
  }
}
