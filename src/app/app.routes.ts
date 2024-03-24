import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './Security/Login/Login.component';
import { HomeComponent } from './Security/pages/home/home-component/home/home.component';
import { Plante } from './interface/Plante';
import { PlanteComponent } from './component/Plante/Plante/Plante.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'jardin',
    component: PlanteComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
