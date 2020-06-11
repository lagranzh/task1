import React from 'react';

export class ExtendedCard extends React.Component {
    render(){
        return <div className="extendedcard">
               <div className="close-button" onClick = {this.props.handleClose}><img src="./img/close_button.png" /></div>
               <div className="info">
               <div className="extendedname">{this.props.person.fullName}</div>
               {
                  this.props.person.university &&        
                  <React.Fragment>
                  <div className="universLabel">Учится</div><div className="univers">{this.props.person.university}</div> <br/>
                  <div className="birthday-label">Дата рождения</div><div className="birthday">{this.props.person.bday.getDay() + "." + this.props.person.bday.getMonth() + "." + this.props.person.bday.getFullYear()}</div> <br/>
                  <div className="phoneLabel">Телефон</div><div className="phone">{this.props.person.phone}</div>
                  </React.Fragment>  
               }
               </div>
                  <img src={this.props.person.photoUrl} className="photo" />
               </div>
    }
}