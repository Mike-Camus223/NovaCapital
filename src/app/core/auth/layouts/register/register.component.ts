import { Component, EventEmitter, Output } from '@angular/core';

interface CarouselImageLogin {
  image: string;
  altImage: string;
  draggable: boolean;
  title: string;
  icon: string;
  msg: string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  date2: Date | undefined;
  steps = [1, 2, 3, 4]; 
  currentStep = 0; 
  completedSteps = [true, false, false, false];
  active: number = 0;
  value!: string;
  password: string = '';  
  isPasswordVisible: boolean = false;  
  
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

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  goToNextStep() {
    if (this.currentStep < this.steps.length - 1) {
      this.completedSteps[this.currentStep + 1] = true; 
      this.currentStep++;
    }
  }

  goToStep(stepIndex: number) {
    if (this.completedSteps[stepIndex]) {
      this.currentStep = stepIndex;
    }
  }
}
