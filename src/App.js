import React from 'react';
import './App.css';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import Popup from './components/Popup/Popup';
import {textGenApiKey as ApiKey} from './config/config';
import deepai from 'deepai';
import {getGoatText }from "./util/text-gen-api"

import Data from './data/data';

function App() {

  const [isOpen, setIsOpen] = React.useState(false);
  const [DATA, setData] = React.useState(Data);

// const getGoatText = async ( {name, food, activity}) => {
//     deepai.setApiKey(ApiKey);
//     const resp = await deepai.callStandardApi("text-generator", {
//             text: `My goat is brown. Their name is ${name}. They like to eat ${food} and they love to ${activity}`,
//     });
//     console.log(resp.output, "my ooutpouusuasu");
//     return resp; 
//   }

  function toggleClose(){
    setIsOpen(!isOpen);
  }

  async function submitForm(name, food, activity){
    console.log(DATA);
     getGoatText({name, food, activity})
    .then((resp)=>{
      console.log(resp);
      const newItem = {name,description:resp.output,img:"https://images.unsplash.com/photo-1588466585717-f8041aec7875"};
      setData([...DATA, newItem]);
      console.log(DATA);
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
