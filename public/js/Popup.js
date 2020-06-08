import {Component} from './component.js';

export class Popup extends Component {
   render({caption, content}) {
       return `<div class="popup">
           <div class="popup__header">
               <p class="popup__title" title="${caption}">${caption}</p>
               <img class="popup__closeButton" title="Закрыть" alt="Кнопка закрыть" src="img/ui/close_x.png"/>
           </div>
           <div class="popup__content">
           ${content}
           </div>
       </div>`;
   }

    afterMount() {
        this._closeButton = this.getContainer().querySelector('.popup__closeButton');
        this._closeButton.addEventListener('click', (event) => {
        event.currentTarget.parentElement.parentElement.remove();
        event.stopPropagation();
    });
    }
}

export class PopupStack extends Component {
  constructor(options) {
    super(options);
    this.popups = [];
  }
  
    render() {
        return `<div class="popup-stack"></div>`;
    }

    clear() {
    this.popups.forEach( p => {
      p.unmount();
    });
    }

    append(options) {
    const popup = factory.create(Popup, options);
    this.popups.push(popup);
    popup.mount(this.getContainer());
    }
}

export class PopupList extends Component {
   constructor(options) {
      super(options);
      this.popups = {};
   }

   render() {
      return `<div class="popup-list"></div>`;
   }

   open(key, options) {

      if (this.popups[key]) {
         this.popups[key].unmount();
      }

      const popup = new Popup(options);
         this.popups[key] = popup;

         popup.mount(this.container);

   }
}