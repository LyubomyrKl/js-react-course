'use strict';
 
let numberOfFilms;

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors:{},
  genres: [],
  privat: false
};

start();
detectedPersonalLevel();
rememberMyFilms();
showMeDB(personalMovieDB.privat);
writeYourGenres();

function writeYourGenres(){
  for(let i = 1; i<=3; i++){
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр фильма ${i}`);
  }
}

function showMeDB(hidden){
  if(!hidden){
    console.log(personalMovieDB);
  }
}

function start(){
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

  while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
  }
}

function detectedPersonalLevel(){
  let statusOfUser = (numberOfFilms < 10 && numberOfFilms> 0) ? 'Достаточно мало фильмов': 
  (numberOfFilms>=10 && numberOfFilms<=30) ? 'Вы обычный зритель' :
  (numberOfFilms>30) ? 'Ого вы киноман' : 
   'Произошла ошибка';
alert(statusOfUser);
}

function rememberMyFilms(){

  for (let i=0; i<2; i++){
    const a = prompt('Один из последних просмотреных фильмов', ''),
          b = +prompt('Насeколько оцение его', '');

          if (a != null &&  b !== null && a !='' && b != '' && a.length < 50){
            personalMovieDB.movies[a]=b;
            console.log('done');
          } else {
               console.log('error');
               i--; 
          }
  }
}