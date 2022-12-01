"use strict"
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


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


for (let i = 1 ; i <3; i++ ) {

    const lastFilm = prompt('Один из последних просмотренных фильмов? ', '');
    const estimation = prompt('на сколько оцените его ', '');
        if(lastFilm != null && estimation != null && lastFilm != '' && estimation != '' && lastFilm.length < 50 ){
            console.log ('There good');
            personalMovieDB.movies[lastFilm] = estimation;
        } else {
            console.log('baaaaaaad');
            i--;
        }


}

console.log(numberOfFilms);
console.log(personalMovieDB.movies);

