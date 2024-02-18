import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home-component/home/home.component';
import { PageJardinComponent } from './pages/mon jardin/pageJardin/pageJardin.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './Security/Login/Login.component';


export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'jardin',
        component: PageJardinComponent
    }, {
        path: '',
        component: LoginComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule { }