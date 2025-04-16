import { Component } from '@angular/core';
import { top100HollywoodMovies } from '../../AppData/AppConstants';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-movie',
  imports: [FormsModule,CommonModule],
  templateUrl: './search-movie.component.html',
  styleUrl: './search-movie.component.scss'
})
export class SearchMovieComponent {


   number =[1,2,3,4,5,6,7,8,9,10] ;
  
_top100HollywoodMovies = top100HollywoodMovies


}


// Example: Log the array to verify
