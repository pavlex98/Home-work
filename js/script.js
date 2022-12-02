"use strict"
let numberOfFilms;
function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }

}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function detectPersonalLevel () {
if (personalMovieDB.count < 10){
    console.log('Просмотрено довольно мало фильмов');
} else if ( personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Wrong');
}
}

// detectPersonalLevel();

function rememberMyFilms(){
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
} 

// rememberMyFilms();

// function showMyDB(){
//     if(personalMovieDB.privat == false) {
//         console.log(personalMovieDB)
//     }
// }
// showMyDB();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres(){

    for(let i = 1; i < 4; i++){
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
    //    personalMovieDB.genres[i-1] = lovelyGenres; //i-1 что бы записывалось в массив по порядку с 0
    }

}



console.log(numberOfFilms);
console.log(personalMovieDB.movies);

writeYourGenres();
