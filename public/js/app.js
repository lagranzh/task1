import {ComponentFactory} from './componentfactory.js';
import {Component} from './component.js';
import {Header} from './header.js';
import {Person} from './person.js';
import {Popup,PopupList,PopupStack} from './Popup.js';
import {DataSet} from './dataset.js'

const factory = new ComponentFactory();
const head = factory.create(Header, {
   title: 'Tensor School',
   description: 'Это страница школы Тензор. Тут вы можете познакомиться с нашими учениками и посмотреть темы занятий.'
});
head.mount(document.body,'afterbegin');

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



let dataset = new DataSet({
    object: 'person',
    model: Model
});
dataset.getAllStudents()
  .then(result=> {
    const personsComponents = [];
    result.forEach(item =>(personsComponents.push(factory.create(Person,item))));
    return personsComponents;})
  .then(result=> {result.forEach(item =>(item.mount(document.getElementsByClassName("block")[0])))})




