import React from 'react';
import App from './App';
const NameCard = ({myAge, myName}) => {
  return <>
      <p>
        Name: {myName}
      </p>
      <p>
        Age: {myAge}
      </p>
    </>;
};

export default NameCard;
