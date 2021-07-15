import './App.css';
import './components/Gallery';
import './components/Header';
import './components/Popup';
import Data from './data/data.json';

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
      <button className="add-button">Add a new goat!</button>
      <Popup handleClose={toggleClose} isOpen={isOpen} handleClose={submitForm}/>
    </div>
  );
}

export default App;
