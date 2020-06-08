import {Student}  from '../js/student.js'
describe("Тестирование компонента Student", function() {
   'use strict';
    it('Тестирование конструирования компонента Student', function() {
        // arrange
        let props = {};

        // act
        const student = new Student(props);

        //assert
        assert(student instanceof Student);
    })

    it('Тестирование рендера компонента Student', function() {
        // arrange
        let props = {
            photoUrl : './photo1.jpg',
            fullName : 'Ваня Иванов',
            university : 'НГУ'
        };
        const student = new Student();
        // act
        let render = student.render(props);

        //assert
        assert.equal(render, '<div class="card"><img class="big-photo" src="./photo1.jpg"><p class="name">Ваня Иванов</p><p class="university">НГУ</p></div>');
    })
});

mocha.run();
