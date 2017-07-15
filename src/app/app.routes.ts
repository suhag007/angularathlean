import { Route } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { MainComponent } from './modules/main/main.component';


export const routes: Route[] = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'main',
        component: MainComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
];