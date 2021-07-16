import React from 'react';
import './App.css';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import Popup from './components/Popup/Popup';
import {getText}from "./util/text-gen-api"

import Data from './data/data';
import {GoatPics} from './data/goatPics';

function App() {

  const [isOpen, setIsOpen] = React.useState(false);
  const [data, setData] = React.useState(Data);
  const [loading, setLoading] = React.useState(false);

  const [subtitle, setSubtitle] = React.useState('');

  React.useEffect(()=>{
    getSubtitle();
  },[])

  function toggleClose(){
    setIsOpen(!isOpen);
  }

  async function submitForm(name, food, activity){
    setLoading(true);
    getText(`This is my goat. Their name is ${name}. They like to eat ${food} and they love to ${activity}`)
    .then((resp)=>{
      const newItem = {title:name,description:processText(resp.output,7),img:randomGoatImage()};
      setData([...data, newItem]);
      setLoading(false);
      toggleClose();
    })
  }

  async function getSubtitle(){
    getText(`The cool thing about goats is`)
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
      {!isOpen && <button className="add-button" onClick={toggleClose}>Add a new goat!</button>}
      <Popup isOpen={isOpen} loading={loading} handleClose={toggleClose} handleSubmit={submitForm}/>
      <Gallery items={data} subtitle={subtitle}/>
    </div>
  );
}

export default App;
