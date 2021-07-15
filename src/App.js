import React from 'react';
import './App.css';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import Popup from './components/Popup/Popup';
import {textGenApiKey as ApiKey} from './config/config';
import deepai from 'deepai';
import {getGoatText }from "./util/text-gen-api"

import Data from './data/data';
import {GoatPics} from './data/goatPics';

function App() {

  const [isOpen, setIsOpen] = React.useState(false);
  const [DATA, setData] = React.useState(Data);

  function toggleClose(){
    setIsOpen(!isOpen);
  }

  async function submitForm(name, food, activity){
    console.log(DATA);
     getGoatText({name, food, activity})
    .then((resp)=>{
      const newItem = {title:name,description:processText(resp.output),img:randomGoatImage()};
      console.log(newItem);
      setData([...DATA, newItem]);
      console.log(DATA);
      toggleClose();
    })
  }

  function processText(text){
    return text.split('.').slice(0,7).join('.') + '.';
  }

  function randomGoatImage(){
    return GoatPics[Math.floor(Math.random()*GoatPics.length)];
  }

  return (
    <div className="App">
      <Header />
      <button className="add-button" onClick={toggleClose}>Add a new goat!</button>
      <Popup isOpen={isOpen} handleClose={toggleClose} handleSubmit={submitForm}/>
      <Gallery items={DATA}/>
    </div>
  );
}

export default App;
