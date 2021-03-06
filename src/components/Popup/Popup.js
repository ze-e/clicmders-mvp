import React from 'react';

function PopupWithForm(props) {
  const {isOpen, loading, handleClose, } = props

  const [name, setName] = React.useState('Billy');
  const [color, setColor] = React.useState('#a67a2e');
  const [food, setFood] = React.useState('barley');
  const [activity, setActivity] = React.useState('walk around aimlessly');

  function handleName(e) {
    setName(e.target.value);
  }

  // delete this and the state if you dont need it
  function handleColor(e) {
    setColor(e.target.value);
  }

  function handleFood(e) {
    setFood(e.target.value);
  }

  function handleActivity(e) {
    setActivity(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    props.handleSubmit(name, food, activity);
  }

  return (
    <section className={`popup ${isOpen  && 'popup_opened'}`} >
      <div className="popup__container">
      <form className="popup__form" onSubmit={handleSubmit}>
          <h4 className="popup__title">Create a goat</h4>
          
          <p className="popup__input-label">Goat name:</p>
          <input className="popup__input" type="text" name="name" required minLength="2" maxLength="40" value={name} onChange={handleName} placeholder="Enter a name for your goat"></input>


          <p className="popup__input-label">Goat's favorite food:</p>
          <input className="popup__input" type="text" name="food" value={food} onChange={handleFood} placeholder="Enter your goat's favorite food"></input>

          <p className="popup__input-label">Goat's favorite activity:</p>
          <input className="popup__input" type="text" name="activity" value={activity} onChange={handleActivity} placeholder="Enter your goat's favorite activity"></input>
          <br/><br/>
          <button className="popup__button" type="submit" disabled={loading}>{!loading ? 'Submit':'Loading...'}</button>
          <button className="popup__button" type="button" onClick={handleClose}>Close</button>  
      </form>
      </div>
    </section>  
  )
}

export default PopupWithForm;