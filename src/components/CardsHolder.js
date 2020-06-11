import React from 'react';
import {Card} from './Card.js'
export class CardsHolder extends React.Component {
    renderCards = () => {
        let cardsTemplate = null;
        cardsTemplate = this.props.persons.map(function(item) {
           return <Card person = {item}/>
        })
        return cardsTemplate;
      }
    render() {
        return (
          <div className='cards-holder'>
            {this.renderCards()}
          </div>
        );
      }
}