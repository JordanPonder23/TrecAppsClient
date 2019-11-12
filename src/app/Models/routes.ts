import { Routes } from "@angular/router";
import { SignupComponent } from './../components/user/signup';
import { LoginComponent } from '../components/user/login';
import { UpdateAccountComponent } from '../components/user/update-account';

export const appRoutes: Routes = [
    {
        path: '/user/signup',
        component: SignupComponent
    },
    {
        path: '/user/login',
        component: LoginComponent
    },
    {
        path: '/user/update-Account',
        component: UpdateAccountComponent
    }

];