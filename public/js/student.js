import {Person} from './person.js';

export class Student extends Person{
    constructor(params) {
        super(params);
        this.university = params.university;
        this.course = params.course;
        this.type = 'student';
    }
        get birthDateStr() {
        const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
        return `${this.birthDate.getDate()} ${months[this.birthDate.getMonth()]}`;
    }
    get age() {
    const now = +new Date();
    let year = Math.floor((now - (+this.birthDate))/31536000000);
    return year;
    }

    render(){
        let div = super.render();

        let universityElement = document.createElement('p');
        universityElement.setAttribute('class', 'university');
        const universityText = document.createTextNode(this.university);
        universityElement.appendChild(universityText);
        div.append(universityElement);
        
        return div;
    }
}