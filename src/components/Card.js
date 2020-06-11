import React from 'react';
import {ExtendedCard} from './ExtendedCard.js'
export class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {extendedCardVisible : false};
        this.handleClose = this.handleClose.bind(this)  
    }
    render(){
        return    <div className="card" onClick={this.handleClick.bind(this)} >
                  <img className="big-photo" src={this.props.person.photoUrl} />
                  <p className="name">{this.props.person.fullName}</p>
                  <p className="university">{this.props.person.university}</p>
                  {
                    this.state.extendedCardVisible &&        
                    <ExtendedCard person = {this.props.person} handleClose = {this.handleClose}/>
                  } 
              </div>
    }
    handleClick(event){
        this.setState({extendedCardVisible:true});
    }
    handleClose(event){
        this.setState({extendedCardVisible:false});
        event.stopPropagation();
    }
}