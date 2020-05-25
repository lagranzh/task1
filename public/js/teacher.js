import {Person} from './person.js';

export class Teacher extends Person{
    constructor(params) {
        super(params);
        this.type = 'teacher';
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
}