import { Component, HostListener } from '@angular/core';

interface ButtonAuth {
  button: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'] 
})
export class NavbarComponent {
  isDropdownOpen: boolean = false;
  isArrowUp: boolean = false;
  buttonAuthSystem: boolean = true; 
  isDropdownClosing: boolean = false; 


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
  ]

}



