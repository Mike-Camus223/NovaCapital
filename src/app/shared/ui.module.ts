import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SidebarModule,
    ButtonModule,
    InputSwitchModule,
    ToggleButtonModule,
    InputTextModule,
    FloatLabelModule,
  ],
  exports: [
    CommonModule,
    SidebarModule,
    ButtonModule,
    InputSwitchModule,
    ToggleButtonModule,
    InputTextModule,
    FloatLabelModule,
  ]
})
export class UiModule { }
