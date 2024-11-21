import { Component, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';

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
  isCollapse: boolean = true;
  menuVisible: boolean = false;
  dropdownOpen = false;
  isMobile = false;

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

  constructor(private viewportScroller: ViewportScroller) { }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkMobileView();
  }

  ngOnInit() {
    this.checkMobileView();
  }

  checkMobileView() {
    this.isMobile = window.innerWidth <= 992;
    if (!this.isMobile) {
      this.dropdownOpen = false;
    }
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  toggleCollapse() {
    if (this.isCollapse) {
      const scrollPosition = this.viewportScroller.getScrollPosition();
      if (scrollPosition[1] !== 0) {
        this.viewportScroller.scrollToPosition([0, 0]);
        setTimeout(() => {
          this.isCollapse = !this.isCollapse;
          document.body.style.overflow = 'hidden';
        }, 300);
      } else {
        this.isCollapse = !this.isCollapse;
        document.body.style.overflow = 'hidden';
      }
    } else {
      this.isCollapse = !this.isCollapse;
      document.body.style.overflow = 'auto';
    }
  }

  closeCollapse() {
    this.isCollapse = true;
    document.body.style.overflow = 'auto';
  }
}
