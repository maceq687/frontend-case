import { RankingComponent } from './ranking/ranking.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'ranking',
    component: RankingComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
