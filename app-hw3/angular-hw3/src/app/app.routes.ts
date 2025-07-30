import { Routes } from '@angular/router';
import { Main } from './pages/main/main';
import { Pagenotfound } from './pages/pagenotfound/pagenotfound';
import { MovieDetail } from './pages/movie-detail/movie-detail';

export const routes: Routes = [
    { path: '', component: Main }, 
    { path: 'movie/:id', component: MovieDetail }, 


    { path: '**', component: Pagenotfound }, 
];
