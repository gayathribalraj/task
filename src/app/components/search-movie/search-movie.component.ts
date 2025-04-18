import { Component } from '@angular/core';
import { top100HollywoodMovies } from '../../AppData/AppConstants';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-movie',
  imports: [FormsModule, CommonModule],
  templateUrl: './search-movie.component.html',
  styleUrl: './search-movie.component.scss'
})
export class SearchMovieComponent {
 // 1. take a copy of datesource
  _top100HollywoodMovies = [...top100HollywoodMovies];

  
  onchange(event: any) {
    let inputValue = event.target.value
    
    // first check input value is a number type if it's a number search for movie name and year
    if(!isNaN(inputValue)){  // checking for a number 
        // inputvalue is a number so search in title and year 
        inputValue = (inputValue as string).toLowerCase()
        this._top100HollywoodMovies = top100HollywoodMovies.filter(m=>m.title.toLowerCase().includes(inputValue))
        if(this._top100HollywoodMovies.length > 0){
            return;
        }else{
            // no search found in title so search in year
            // this._top100HollywoodMovies = top100HollywoodMovies.filter(m=>m.releaseYear == inputValue)
            this._top100HollywoodMovies = top100HollywoodMovies.filter(val => val.releaseYear.toString().includes(inputValue))
            console.log("this._top100HollywoodMovies", this._top100HollywoodMovies)
        }
    }else{ // inputValue is not a number check in name and director only
      inputValue = (inputValue as string).toLowerCase()
      this._top100HollywoodMovies = top100HollywoodMovies.filter(m=>m.title.toLowerCase().includes(inputValue))
      console.log(this._top100HollywoodMovies)
      if(this._top100HollywoodMovies.length > 0){
          return;
      }else{
          // no search found in title so search in year
          this._top100HollywoodMovies = top100HollywoodMovies.filter(m=>m.director.toLowerCase().includes(inputValue))
      }
    }
    // if search string is not a number then filter by name and director 



      }
    }
