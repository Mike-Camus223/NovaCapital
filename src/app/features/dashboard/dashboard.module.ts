import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashBaseComponent } from './pages/dash-base/dash-base.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    SidebarComponent,
    DashBaseComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
