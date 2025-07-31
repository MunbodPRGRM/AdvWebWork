import { Routes } from '@angular/router';
import { Main } from './pages/main/main';
import { Pagenotfound } from './pages/pagenotfound/pagenotfound';
import { MovieDetail } from './pages/movie-detail/movie-detail';
import { People } from './pages/people/people';

export const routes: Routes = [
    { path: '', component: Main }, 
    { path: 'movie/:id', component: MovieDetail, }, 
    { path: 'person/:id', component: People }, 
    { path: 'person/:name', component: People },
    
    { path: '**', component: Pagenotfound }, 
];
