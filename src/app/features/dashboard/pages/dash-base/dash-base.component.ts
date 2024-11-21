import { Component, ViewChild } from '@angular/core';
import { MenuDashboardLinks } from '../../../../core/models/Menulinks.interface';
import { ThemeService } from '../../../../core/services/Theme.service';

@Component({
  selector: 'app-dash-base',
  templateUrl: './dash-base.component.html',
  styleUrls: ['./dash-base.component.scss']
})
export class DashBaseComponent {

  greetings: string = '';
  greetingsIcon: string = '';
  colorIcon: string = '';
  shadow: string = '';
  checked: boolean = false;
  visibleSidebar: boolean = false;
  notifyChecked: boolean = false;

  systemMenuSidebar: MenuDashboardLinks[] = [
    {
      admin: [
        { link: '/dashboard/state', icon: 'fa-solid fa-house', name: 'Dashboard', color: 'asdasd' },
        { link: '/dashboard/transactions', icon: 'fa-solid fa-arrow-right-arrow-left', name: 'Transaction', color: 'asdadasd' },
        { link: '/dashboard/payments', icon: 'fa-solid fa-wallet', name: 'Payments', color: 'asdadasd' },
        { link: '/dashboard/my-cards', icon: 'fa-regular fa-credit-card', name: 'Cards', color: 'asdadasd' },
      ],
      user: [
        { link: '/dashboard/state', icon: 'fa-solid fa-house', name: 'Dashboard', color: 'asdasd' },
        { link: '/dashboard/transactions', icon: 'fa-solid fa-arrow-right-arrow-left', name: 'Transaction', color: 'asdadasd' },
        { link: '/dashboard/payments', icon: 'fa-solid fa-wallet', name: 'Payments', color: 'asdadasd' },
        { link: '/dashboard/my-cards', icon: 'fa-regular fa-credit-card', name: 'Cards', color: 'asdadasd' },
      ]
    }
  ];

  userPanelOption: any[] = [
    { link: '##', icon: 'pi pi-user', name: 'View Profile' },
    { link: '##', icon: 'pi pi-gift', name: 'Referred Friends' },
    { link: '##', icon: 'pi pi-cog', name: 'Settings' },
    { link: '##', icon: 'pi pi-lock', name: 'Security and Privacy' },
    { link: '##', icon: 'pi pi-sign-out', name: 'Sign out' }
  ]

  constructor(private themeService: ThemeService) { }

  changeTheme() {
    this.checked = !this.checked;
    const theme = this.checked ? 'lara-dark-blue' : 'lara-light-blue';
    this.themeService.switchTheme(theme);
  }

  changeNotify() {
    this.notifyChecked = !this.notifyChecked
  }

  defineGreeting(): void {
    const date = new Date();
    const ArgTime = date.getUTCHours() - 3;

    if (ArgTime >= 6 && ArgTime < 12) {
      this.greetings = 'Good Morning';
      this.greetingsIcon = 'fa-solid fa-cloud-sun';
      this.colorIcon = '#ffcd36';
      this.shadow = 'shadowMorning';
    } else if (ArgTime >= 12 && ArgTime < 18) {
      this.greetings = 'Good Afternoon';
      this.greetingsIcon = 'fa-solid fa-cloud';
      this.colorIcon = '#c7ced9';
      this.shadow = 'shadowAfternoon';
    } else {
      this.greetings = 'Good Night';
      this.greetingsIcon = 'fa-solid fa-moon';
      this.colorIcon = '#c0d2da';
      this.shadow = 'shadowNight';
    }
  }

  ngOnInit(): void {
    this.visibleSidebar = true;
    this.defineGreeting();
  }
  toggleSidebar(): void {
    this.visibleSidebar = !this.visibleSidebar;
  }
}
