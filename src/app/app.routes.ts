import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './Security/Login/Login.component';
import { EnregistrementPlante } from './Security/pages/home/home-component/EnregistrementPlante/EnregistrementPlante';
import { PlanteComponent } from './component/Plante/Plante/PlanteComponent';

export const routes: Routes = [
  {
    path: 'enregistrement-plante',
    component: EnregistrementPlante,
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
    path: '',
    pathMatch: 'full',
    redirectTo: '/login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
