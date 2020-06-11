import React from 'react';
import logo from './logo.svg';
import {Header} from './components/Header.js'
import {CardsHolder} from './components/CardsHolder.js'
import './App.css';

function App() {
  const personsArray = [
    {
      "id": 1,
      "fullName": "Миша Петров",
      "photoUrl": "img/ava01.jpg",
      "university": "НГУ",
      "bday": new Date(2002, 6, 10),
      "phone": "+7 (963) 123-45-67",
      "active": "2020-04-11T18:01:47.339Z"
    },
    {
      "id": 3,
      "fullName": "Женя Серова",
      "photoUrl": "img/ava03.jpg",
      "university": "НГУ",
      "bday": new Date(2002, 6, 10),
      "phone": "+7 (963) 123-45-67",
      "active": "2020-04-03T15:00:00.000Z"
    },
    {
      "id": 4,
      "fullName": "Вася Васильев",
      "photoUrl": "img/ava04.jpg",
      "university": "НГУ",
      "bday": new Date(2002, 6, 10),
      "phone": "+7 (963) 123-45-67",
      "active": "2020-04-11T18:01:47.340Z"
    },
    {
      "id": 5,
      "fullName": "Вика Цукерберг",
      "photoUrl": "img/ava05.jpg",
      "university": "НГУ",
      "bday":  new Date(2002, 6, 10),
      "phone": "+7 (963) 123-45-67",
      "active": "2020-03-05T15:00:00.000Z"
    },
    {
      "id": 6,
      "fullName": "Андрей Петров",
      "photoUrl": "img/ava06.jpg",
      "university": "НГУ",
      "bday": new Date(2002, 6, 10),
      "phone": "+7 (963) 123-45-67",
      "active": "2020-04-03T15:00:00.000Z"
    }
  ];

  return (
    <React.Fragment>
      <Header title = {'Tensor School'} description = {'Это страница финального домашнего задания онлайн школы "Тензор"'} />
      <CardsHolder persons = {personsArray} />
    </React.Fragment>
  );
}

export default App;
