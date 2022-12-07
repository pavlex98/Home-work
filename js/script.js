"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  detectPersonalLevel: () => {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман");
    } else {
      console.log("Wrong");
    }
  },
  rememberMyFilms: () => {
    for (let i = 1; i < 3; i++) {
      const lastFilm = prompt("Один из последних просмотренных фильмов? ", "");
      const estimation = prompt("на сколько оцените его ", "");
      if (
        lastFilm != null &&
        estimation != null &&
        lastFilm != "" &&
        estimation != "" &&
        lastFilm.length < 50
      ) {
        console.log("There good");
        personalMovieDB.movies[lastFilm] = estimation;
      } else {
        console.log("baaaaaaad");
        i--;
      }
    }
  },
  showMyDB: (hidden) => {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },

  writeYourGenres: () => {
    for (let i = 1; i < 2; i++) {
      // for(let i = 1; i < 4; i++){
      // let genre = prompt(`Ваш любимый жанр под номером ${i}`);

      // if (genre != null && genre != ""){
      //      personalMovieDB.genres[i-1] = genre;
      // }else{
      //    i--;
      // }
      let genres = prompt("Введите любимые жанры через запятую:");
      if (genres != null && genres != "") {
        personalMovieDB.genres = genres.split(",");
        personalMovieDB.genres.sort(); // сортирует по алфавиту
      } else {
        console.log("Вы не ввели данные или ввели их некорректно!!");
        i--;
      }
    }

    personalMovieDB.genres.forEach(function (item, i, genres) {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  },
};
