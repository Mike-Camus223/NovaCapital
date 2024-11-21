import { Component } from '@angular/core';
import { GoalsAddBlock } from '../../../../core/models/Goals.interface';

@Component({
  selector: 'app-goals-panel',
  templateUrl: './goals-panel.component.html',
  styleUrl: './goals-panel.component.scss'
})
export class GoalsPanelComponent {

  GoalsData: GoalsAddBlock[] = [];

  goalsSystem: GoalsAddBlock[] = [
    {
      icon: 'fa-solid fa-mobile-screen-button',
      name: 'New iPhone 15 Plus',
      percentage: 70,
      
    },
    {
      icon: 'fa-solid fa-desktop',
      name: 'New iMac',
      percentage: 50,
    },
    {
      icon: 'fa-solid fa-plane-departure',
      name: 'New trip to Toronto',
      percentage: 30,
    },
  ]
}
