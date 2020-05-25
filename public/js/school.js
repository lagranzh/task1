export class School{
    constructor(params){
        this.personArray = [];
    }

    add(person){
        this.personArray.push(person);
    }

    delete(name){
        this.personArray = this.personArray.filter(function(item) {
            return item.fullName !== name;
        });
    }

    getPersonByName(name){
        return this.personArray.find(function(item) { return item.fullName === name });
    }
    appendToDom(){
        this.personArray.forEach(element => {
            element.appendToDOM();
        });
    }
}