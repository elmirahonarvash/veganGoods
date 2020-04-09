import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatRadioModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule

  ],
  exports: [MatButtonModule, MatRadioModule, MatSidenavModule, MatToolbarModule, MatIconModule]
})
export class MateralModule { }
