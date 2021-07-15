import React from 'react';
import './App.css';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import Popup from './components/Popup/Popup';

import Data from './data/data';
import getGoatText from './util/text-gen-api';

function App() {

  const [isOpen, setIsOpen] = React.useState(false);
  const [DATA, setData] = React.useState(Data);

  function toggleClose(){
    setIsOpen(!isOpen);
  }

  function submitForm(name, food, activity){
    getGoatText({name, food, activity})
    .then((resp)=>{
      const newItem = {name, description:resp.output, img:"https://images.unsplash.com/photo-1588466585717-f8041aec7875"};
      setData([...DATA, newItem]);
      toggleClose();
    })
  }

  return (
    <div className="App">
      <Header />
      <button className="add-button" onClick={toggleClose}>Add a new goat!</button>
      <Popup isOpen={isOpen} handleClose={toggleClose} handleSubmit={submitForm}/>
      <Gallery items={Data}/>
    </div>
  );
}

export default App;
