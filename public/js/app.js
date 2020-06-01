import {ComponentFactory} from './componentfactory.js';
import {Component} from './component.js';
import {Header} from './header.js';
import {Person} from './person.js';
import {Popup,PopupList,PopupStack} from './Popup.js';

const factory = new ComponentFactory();
const head = factory.create(Header, {
   title: 'Tensor School',
   description: 'Это страница школы Тензор. Тут вы можете познакомиться с нашими учениками и посмотреть темы занятий.'
});
head.mount(document.body);

class Model {
   constructor(data) {
      for(let key in data) {
         this[key] = data[key];
      }
   }

   get fullName() {
      return `{this.title}`;
   }
}

let personModel = new Model({
   title: 'Женя Серова',
   photo: 'img/ava03.jpg',
   study: 'Угату',
   bday: new Date('1998-11-13'),
   phone: '+7 (963) 123-45-67',
   active: new Date('2020-04-03T20:00:00')
}
);
const person = factory.create(Person, {item: personModel});
person.mount(document.body);
const popupStack = factory.create(PopupStack);
popupStack.mount(document.body);