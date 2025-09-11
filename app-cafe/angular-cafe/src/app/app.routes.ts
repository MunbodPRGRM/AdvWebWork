import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Type } from './pages/type/type';
import { List } from './pages/list/list';

export const routes: Routes = [
    { path: '', component: Login }, 
    { path: 'type', component: Type }, 
    { path: 'list/:type', component: List }
];
