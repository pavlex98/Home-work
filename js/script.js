/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const promoAdv = document.querySelectorAll('.promo__adv'),
      promoContent = document.querySelector('.promo__genre'),
      promoBg = document.querySelector('.promo__bg'),
      promoFilms = document.querySelectorAll('promo__interactive-item'),
      promoFilmsList = document.querySelector('.promo__interactive-list'),
    


const movieDB = {
    movies: [

        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."        
    ]
};


promoAdv.forEach(element => {
    element.remove()
});

// promoAdv.forEach(function(element) {
//     element.remove()
// });

promoContent.textContent = "Драма";


promoBg.style.backgroundImage = 'url("img/bg.jpg")';

promoFilmsList.innerHTML = "";
movieDB.movies.sort();


movieDB.movies.forEach((film, i)=> {
promoFilmsList.innerHTML += `
    <li class="promo__interactive-item"><b>${++i}</b> - ${film}
        <div class="delete"></div>
    </li>
` 
});



// function removeFilmList(){
//     promoFilmsList.innerHTML = '';
// }
// function createFilmList(){
//     removeFilmList();
//     movieDB.movies.forEach(element => {
//         const film = document.createElement('li');
//         film.classList='promo__interactive-item';
//         film.innerHTML=`
//             ${element}
//             <div class="delete"></div>
//         `
//         promoFilmsList.appendChild(film);
//     });
// }
// createFilmList();