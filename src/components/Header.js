import React from 'react';

export const Header = (data) => {
    return (
     <React.Fragment>
     <header>
        <div className="header">
            <img src="./img/logo.jpg" alt="Логотип компании Тензор" />
            <h1>{data.title}</h1>
        </div>
        <p>
        {data.description}
        </p>
    </header>
      </React.Fragment>
    )
  }