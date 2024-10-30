import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { StyleClassModule } from 'primeng/styleclass';
import { AvatarModule } from 'primeng/avatar';
import { RippleModule } from 'primeng/ripple';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SidebarModule,
    InputSwitchModule,
    ToggleButtonModule,
    InputTextModule,
    FloatLabelModule,
    ButtonModule,
    RippleModule,
    AvatarModule,
    StyleClassModule
  ],
  exports: [
    CommonModule,
    SidebarModule,
    InputSwitchModule,
    ToggleButtonModule,
    InputTextModule,
    FloatLabelModule,
    ButtonModule,
    RippleModule,
    AvatarModule,
    StyleClassModule
  ]
})
export class UiModule { }
