import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';
import { PractiseComponent } from './components/practise/practise.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'practice',
        pathMatch:'full'

    },

    {
    path:'search',
    component:SearchMovieComponent
},
{
    path:'practice',
    component:PractiseComponent
}


];
