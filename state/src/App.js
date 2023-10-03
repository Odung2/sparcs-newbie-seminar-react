import React, { useState } from 'react';
import './App.css';

const DOG_IMG_URL =
  'https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=iQEwihUn';
const CAT_IMG_URL =
  'https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg';

const App = () => {
  const [dogOrCat, setAnimal] = useState(DOG_IMG_URL);

  const clickHandler = () => {
    if (dogOrCat === DOG_IMG_URL) {
      setAnimal(CAT_IMG_URL);
    } else {
      setAnimal(DOG_IMG_URL);
    }
  }

  return (
    <div className="App">
      <h3>Do you like dog, or cat?</h3>
      <button onClick={clickHandler}>change the animal</button>
      <img src={dogOrCat} alt="Dog or Cat" />
    </div>
  );
};

export default App;
