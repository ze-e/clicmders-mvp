import React from 'react';
import './App.css';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import Popup from './components/Popup/Popup';
import Data from './data/data';

function App() {

  const [isOpen, setIsOpen] = React.useState(false);

  function toggleClose(){
    setIsOpen(!isOpen);
  }

  function submitForm(){
    toggleClose();
  }

  return (
    <div className="App">
      <Header />
      <Gallery items={Data}/>
      <button className="add-button" onClick={toggleClose}>Add a new goat!</button>
      <Popup handleClose={toggleClose} isOpen={isOpen} handleClose={submitForm}/>
    </div>
  );
}

export default App;
