import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';



@NgModule({
  declarations: [
    NavComponent,
    ButtonComponent,
    InputComponent
  ],
  exports:[
    NavComponent,
    ButtonComponent,
    InputComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
