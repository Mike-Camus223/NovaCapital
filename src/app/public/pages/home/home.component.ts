import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  hovericon = false;
  hovericon2 = false;

  isDropdownClosing = false;
  isDropdownOpen: boolean = false;
  isArrowUp: boolean = false;

  toggleDropdown() {
    if (this.isDropdownOpen) {
        this.isDropdownClosing = true;
        setTimeout(() => {
            this.isDropdownOpen = false;
            this.isArrowUp = false;
            this.isDropdownClosing = false;
        }, 300); 
    } else {
        this.isDropdownOpen = true;
        this.isArrowUp = true;
    }
}


  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const targetElement = event.target as HTMLElement;
    const dropdownMenu = document.querySelector('.dropdown-menu');

    if (this.isDropdownOpen && dropdownMenu && !dropdownMenu.contains(targetElement) && !targetElement.closest('.nav-item')) {
      this.closeDropdown();
    }
  }

  closeDropdown() {
    this.isDropdownClosing = true;
    setTimeout(() => {
      this.isDropdownOpen = false;
      this.isArrowUp = false;
      this.isDropdownClosing = false;
    }, 300);
  }
}
