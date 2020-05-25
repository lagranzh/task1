const openCard = (student, currentTarget) =>  {
    let div = document.createElement('div');
    div.setAttribute('class', 'card_open');
    let button = document.createElement('div');
    button.setAttribute("class","button")
    let img = document.createElement("img");
    img.src = "img/close_button.png";
    button.append(img);
    div.append(button);
    button.addEventListener('click', (event) => {
        event.currentTarget.parentElement.remove();
        event.stopPropagation();
    });
    let card_info = document.createElement('div');
    card_info.setAttribute("class","card_info");
    let p = document.createElement('p');
    p.innerHTML = student.fullName;
    p.setAttribute("class","name")
    let table = document.createElement("table");
    table.setAttribute('class', 'table');
    let tr1 = document.createElement('tr');
    let tr2 = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    table.append(tr1);
    table.append(tr2);
    tr1.append(td1);
    tr1.append(td2);
    tr2.append(td3);
    tr2.append(td4);
    td1.innerHTML = "День рождения";
    td2.innerHTML = student.birthDateStr + ", " + student.age + " лет";
    td1.setAttribute("class", "first");
    td2.setAttribute("class", "second");
    td3.setAttribute("class", "first");
    td4.setAttribute("class", "second");
    card_info.append(p);
    card_info.append(table);
    div.append(card_info);
    let photoElement = document.createElement('img');
    photoElement.setAttribute('src', student.photoUrl);
    photoElement.setAttribute('class', 'photocard');
    div.append(photoElement);
    currentTarget.append(div);

}


export class Person{
    constructor(params){
        this.name = params.name;
        this.birthDate = params.birthDate;
        this.photoUrl = params.photoUrl;
        this.type = 'person';
    }
    render() {
        let div = document.createElement('div');
        div.setAttribute('class', 'card');

        let img = document.createElement('img');
        img.setAttribute('class', 'big-photo');
        img.setAttribute('src', this.photoUrl);
        div.append(img);

        let nameElement = document.createElement('p');
        nameElement.setAttribute('class', 'name');
        const nameText = document.createTextNode(this.name);
        nameElement.appendChild(nameText);
        div.append(nameElement);
        return div;
    }

    appendToDOM() {
        const layout = this.render();
        let parent = document.getElementById('wrapper');
        parent.getElementsByClassName('cards-holder')[0].append(layout);
        layout.addEventListener('click', (event) => {
            openCard(this, event.currentTarget);
        });
    }
}
