import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [TopBarComponent],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [TopBarComponent]
})
export class MainNavModule { }
