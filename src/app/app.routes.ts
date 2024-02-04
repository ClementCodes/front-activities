import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home-component/home/home.component';
import { PageJardinComponent } from './pages/mon jardin/pageJardin/pageJardin.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'jardin',
        component: PageJardinComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule { }