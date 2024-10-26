import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarModule } from 'primeng/sidebar';
import { DashBaseComponent } from './pages/dash-base/dash-base.component';


@NgModule({
  declarations: [
    SidebarComponent,
    DashBaseComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SidebarModule
  ]
})
export class DashboardModule { }
