'use strict';
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотреных фильмов',''),
      b = +prompt('Насколько оцение его',''),
      c = prompt('Один из последних просмотреных фильмов',''),
      d = +prompt('Насколько оцение его','');

personalMovieDB.movies[a]=b;
personalMovieDB.movies[c]=d;

console.log(personalMovieDB);