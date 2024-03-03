import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './Security/Login/Login.component';
import { PageJardinComponent } from './Security/pages/mon jardin/pageJardin/pageJardin.component';
import { HomeComponent } from './Security/pages/home/home-component/home/home.component';
import { JardinComponent } from './component/jardin/jardin/jardin.component';
import { AcceuilComponent } from './pages/acceuil/Acceuil/Acceuill/Acceuil.component';


export const routes: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: 'login'

    },
    {
        path: 'home',
        component: HomeComponent
    }, {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'jardin',
        component: PageJardinComponent
    },
    {
        path: 'register',
        component: AcceuilComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule { }