import {Component} from './component.js';
import {PopupList,Popup} from './Popup.js';

export class Person extends Component {
   render(item) {
      this.options.photo = item.photoUrl;
      this.options.title = item.fullName;
      return `<div class="card card_person">
          <img class="card__img card__img_round" src="${item.photoUrl || 'img/ui/default_pix.jpg'}" alt="Аватар ${item.fullName}" />
          <p class="card__title" title="${item.title || ''}">${item.fullName || ''}</p>
          <span class="card__description" title="${item.university || ''}">${item.university || ''}</span>
      </div>`;
   }

   afterMount() {
      this.container.addEventListener('click', (event) => this.onClick(event) );
   }

   onClick(event) {
      if (!this.popup) {
         this.popup = new PopupList();
         this.popup.mount(event.currentTarget);
      }
      this.popup.open('student', {
         caption: this.options.title,
         content: `<center><img height="300" width="300" class="card__img" src="${this.options.photo || 'img/ui/default_pix.jpg'}" alt="Аватар ${this.title}" /></center>`
      });
   }
}
