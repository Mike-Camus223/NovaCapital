import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

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
  value2: string | undefined;
  date2: Date | undefined;
  steps = [1, 2, 3, 4];
  currentStep = 0;
  completedSteps = [true, false, false, false];
  active: number = 0;
  value!: string;
  password: string = '';
  isPasswordVisible: boolean = false;

  constructor(private router: Router) { }

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
    },
    {
      image: 'assets/images/Congratulation.png',
      altImage: 'Sign in',
      draggable: false,
      icon: 'pi-arrow-right',
      title: 'Banking Made Easier!',
      msg: 'Manage your finances, anywhere, anytime. Transfer money, pay bills and monitor your cards with ease',
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
      this.currentStep++;
      this.completedSteps[this.currentStep] = true;
    } else {
      this.router.navigate(['']);
    }
  }



  getButtonText(): string {
    if (this.currentStep === 2) {
      return 'Submit';
    } else if (this.currentStep === 3) {
      return 'Finish';
    } else {
      return 'Next';
    }
  }

  goToStep(stepIndex: number) {
    if (this.completedSteps[stepIndex] || stepIndex === this.steps.length - 1) {
      this.currentStep = stepIndex;
    }
  }
}
