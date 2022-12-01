"use strict"
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let cykl =0;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



if (personalMovieDB.count < 10){
    console.log('Просмотрено довольно мало фильмов');
} else if ( personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Wrong');
}

while(cykl < 2 ){
   const lastFilm = prompt('Один из последних просмотренных фильмов? ', '');
    const estimation = prompt('на сколько оцените его ', '');  
  
       
    if(lastFilm != null && estimation != null && lastFilm != '' && estimation != '' && lastFilm.length < 50 ){
        console.log ('There good');
        personalMovieDB.movies[lastFilm] = estimation;
    } else {
        console.log('baaaaaaad');
        cykl--;
    }
  cykl++;
}


console.log(numberOfFilms);
console.log(personalMovieDB.movies);

