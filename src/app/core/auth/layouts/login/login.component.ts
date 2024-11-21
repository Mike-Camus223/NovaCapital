import { Component, EventEmitter, Output } from '@angular/core';
import { NavbarComponent } from '../../../../features/public/components/navbar/navbar.component';

interface CarouselImageLogin {
  image: string;
  altImage: string;
  draggable: boolean;
  title: string;
  icon: string;
  msg: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  value!: string;
  password: string = '';  
  isPasswordVisible: boolean = false;  

  @Output() closeNavbarEvent = new EventEmitter<void>();
  
  constructor(private CollapseSystem: NavbarComponent) { }
  
  CloseCollap() {
    this.closeNavbarEvent.emit();
  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  ImagesCarousel: CarouselImageLogin[] = [
    {
      image: 'assets/images/sign-vectorial.png',
      altImage: 'Sign in',
      draggable: false,
      icon: 'pi-arrow-right',
      title: 'Banking Made Easier!',
      msg: 'Manage your finances, anywhere, anytime. Transfer money, pay bills and monitor your cards with ease.'
    },
    {
      image: 'assets/images/sign-vectorial2.png',
      altImage: 'Sign in',
      draggable: false,
      icon: 'pi-arrow-right',
      title: 'Intergrated Banking',
      msg: 'Open a bank account that seamlessly intergrates with your payment app.'
    },
    {
      image: 'assets/images/sign-vectorial3.png',
      altImage: 'Sign in',
      draggable: false,
      icon: 'pi-arrow-right',
      title: 'Secure Your Future',
      msg: 'Secure your financial future with our easy to use tools and plan for financial freedom.',
    }
  ]

  responsiveOptions = [
    { breakpoint: '1200px', numVisible: 1, numScroll: 1 },
    { breakpoint: '992px', numVisible: 1, numScroll: 1 },
    { breakpoint: '768px', numVisible: 1, numScroll: 1 },
    { breakpoint: '576px', numVisible: 1, numScroll: 1 }
  ];

} 