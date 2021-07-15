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

  function submitForm(e){
    e.preventDefault();
    toggleClose();
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
