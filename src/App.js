import React from 'react';
import './App.css';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import Popup from './components/Popup/Popup';
import {textGenApiKey as ApiKey} from './config/config';
import deepai from 'deepai';
import {getText }from "./util/text-gen-api"

import Data from './data/data';
import {GoatPics} from './data/goatPics';

function App() {

  const [isOpen, setIsOpen] = React.useState(false);
  const [DATA, setData] = React.useState(Data);

  const [subtitle, setSubtitle] = React.useState('Here are some of my goats. You can add your own goats, too!');

  React.useEffect(()=>{
    getSubtitle();
  },[])

  function toggleClose(){
    setIsOpen(!isOpen);
  }

  async function submitForm(name, food, activity){
     getText(`This is my goat. Their name is ${name}. They like to eat ${food} and they love to ${activity}`)
    .then((resp)=>{
<<<<<<< HEAD
      const newItem = {name, description:resp.output, img:"https://images.unsplash.com/photo-1588466585717-f8041aec7875"};
=======
      const newItem = {title:name,description:processText(resp.output,7),img:randomGoatImage()};
>>>>>>> dev
      setData([...DATA, newItem]);
      toggleClose();
    })
  }

  async function getSubtitle(){
    getText(`Here are some of my goats. You can add your own goats, too!`)
   .then((resp)=>{
      setSubtitle(processText(resp.output,3));
   })
 }

  function processText(text, length){
    return text.split('.').slice(0,length).join('.') + '.';
  }

  function randomGoatImage(){
    return GoatPics[Math.floor(Math.random()*GoatPics.length)];
  }

  return (
    <div className="App">
      <Header />
      <button className="add-button" onClick={toggleClose}>Add a new goat!</button>
      <Popup isOpen={isOpen} handleClose={toggleClose} handleSubmit={submitForm}/>
      <Gallery items={DATA} subtitle={subtitle}/>
    </div>
  );
}

export default App;
