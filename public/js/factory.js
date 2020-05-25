import {Student} from './student.js';
import {Teacher} from './teacher.js';

export class Factory {
  
    createStudent(params){
        return new Student(params);
    }
    createTeacher(params){
        return new Teacher(params);
    }
}