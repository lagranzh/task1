import {Factory} from './factory.js';
import {School} from './school.js';

// проинициализируем фабрику
const factory = new Factory();

// создадим школу (если есть для нее фабрика, то тоже через фабрику) 
let school = new School();

// добавим в список школы студентов используйте те данные, которые у вас есть
// Vasia и пр. тут скорее для примера
// если методы называются по другому, поменяйте
// по желанию можно добавить больше
school.add( factory.createStudent({ name: 'Иван Иванов', university:'НГУ', course: 2, birthDate: new Date(2000, 0, 1), photoUrl: './img/ava03.jpg' }) );
school.add( factory.createStudent({ name: 'не Иван Иванов', university:'НГУ', course: 4, birthDate: new Date(1998, 4, 5), photoUrl: './img/ava01.jpg' }) );
school.add( factory.createStudent({ name: 'Катя Иванова', university:'НГУ', course: 3, birthDate: new Date(2000, 0, 1), photoUrl: './img/ava02.jpg' }) );
school.add( factory.createTeacher({ name: 'не Катя Иванова', birthDate: new Date(2000, 0, 1), photoUrl: './img/ava04.jpg' }) );
school.add( factory.createTeacher({ name: 'Настя Иванова', birthDate: new Date(2000, 0, 1), photoUrl: './img/ava05.jpg' }) );
school.add( factory.createTeacher({ name: 'не Настя Иванова', birthDate: new Date(2000, 0, 1), photoUrl: './img/ava06.jpg' }) );

// отрисуем всех студентов в dom 
// если методы называются по другому, поменяйте
// точка монтирования document.body может быть изменена на любой другой элемент DOM
school.appendToDom(document.body);

// в итоге в на странице должны получить список студентов и учителей
// папка js будет содержать несколько файлов, минимум 3, а лучше больше