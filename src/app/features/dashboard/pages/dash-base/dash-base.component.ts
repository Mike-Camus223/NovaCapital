import { Component } from '@angular/core';
import { MenuDashboardLinks } from '../../../../core/models/Menulinks.interface';
import { ThemeService } from '../../../../core/services/Theme.service';

@Component({
  selector: 'app-dash-base',
  templateUrl: './dash-base.component.html',
  styleUrls: ['./dash-base.component.scss']
})
export class DashBaseComponent {

  checked: boolean = false;

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

  visibleSidebar: boolean = false;

  constructor(private themeService: ThemeService) { }

  changeTheme() {
    this.checked = !this.checked;
    const theme = this.checked ? 'lara-dark-blue' : 'lara-light-blue';
    this.themeService.switchTheme(theme);
  }
  ngOnInit(): void {
    this.visibleSidebar = true;
  }
  toggleSidebar(): void {
    this.visibleSidebar = !this.visibleSidebar;
  }
}
