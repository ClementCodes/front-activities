import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './Security/Login/Login.component';
import { PageJardinComponent } from './Security/pages/mon jardin/pageJardin/pageJardin.component';
import { HomeComponent } from './Security/pages/home/home-component/home/home.component';
import { JardinComponent } from './component/jardin/jardin/jardin.component';


export const routes: Routes = [
 
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
    },   {
        path: '**', pathMatch: 'full', redirectTo: '/'

    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule { }