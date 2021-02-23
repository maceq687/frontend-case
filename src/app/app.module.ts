import { MainNavModule } from './main-nav/main-nav.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { RankingComponent } from './ranking/ranking.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OptionComponent } from './option/option.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RankingComponent,
    OptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MainNavModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSliderModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
