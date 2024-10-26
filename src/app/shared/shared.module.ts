import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms'; 
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    FloatLabelModule,
    InputTextModule,
    FormsModule,
    InputSwitchModule
  ],
  exports: [],
})
export class SharedModule { }
