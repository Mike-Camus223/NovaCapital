import { Component } from '@angular/core';

interface CreditCard {
  typeNameCard: string,
  title: string,
  value: number,
  creditNumber: string,
  date: Date,
  icon: string,
  backgroundPri: string,
  backgroundColor: string,
  backgroundDeco: string,
  colortext: string,
}

@Component({
  selector: 'app-cards-carousel',
  templateUrl: './cards-carousel.component.html',
  styleUrl: './cards-carousel.component.scss'
})
export class CardsCarouselComponent {

  CreditCardData: CreditCard[] = [];

  responsiveOptions = [
    { breakpoint: '1200px', numVisible: 1, numScroll: 1 },
    { breakpoint: '992px', numVisible: 1, numScroll: 1 },
    { breakpoint: '768px', numVisible: 1, numScroll: 1 },
    { breakpoint: '576px', numVisible: 1, numScroll: 1 }
  ];

  CardUser: CreditCard[] = [
    {
      typeNameCard: 'Debit Card',
      title: 'Balance',
      value: 1400000,
      creditNumber: '1234 1234 4421 4234',
      date: new Date(2025, 10, 1),
      icon: '',
      backgroundPri: 'bg-gray-500',
      backgroundColor: 'var(--gray-500)',
      backgroundDeco: 'var(--gray-400)',
      colortext: 'text-blue-50',
    },
    {
      typeNameCard: 'Credit Card Visa',
      title: 'Balance',
      value: 450000,
      creditNumber: '1234 1234 9271 0930',
      date: new Date(2027, 0, 1),
      icon: 'fa-brands fa-cc-visa',
      backgroundPri: 'bg-blue-600',
      backgroundColor: 'var(--blue-600)',
      backgroundDeco: 'var(--blue-500)',
      colortext: 'text-blue-50',
    },
    {
      typeNameCard: 'Credit Card MasterCard',
      title: 'Balance',
      value: 320000,
      creditNumber: '1234 1234 2566 2144',
      date: new Date(2026, 11, 1),
      icon: 'fa-brands fa-cc-mastercard',
      backgroundPri: 'bg-gray-50',
      backgroundColor: 'var(--gray-50)',
      backgroundDeco: 'var(--orange-400)',
      colortext: 'text-black-alpha-90',
    }
  ];  
}
