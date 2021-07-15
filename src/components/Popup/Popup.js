function PopupWithForm(props) {

  const [name, setName] = React.useState('Billy');
  const [color, setColor] = React.useState('#000000');
  const [food, setFood] = React.useState('Barley');
  const [activity, setActivity] = React.useState('Walking around aimlessly');

  function handleName(e) {
    setName(e.target.value);
  }

  function handleColor(e) {
    setColor(e.target.value);
  }

  function handleFood(e) {
    setFood(e.target.value);
  }

  function handleActivity(e) {
    setActivity(e.target.value);
  }


  return (
    <section className={`${props.isOpen  && 'popup_state_opened'}`} >
      <div className="popup__container">
      <form className="popup__form" onSubmit={props.handleSubmit}>
        <button className="popup__close" type="button" onClick={props.handleClose}></button>  
          <h4 className="popup__title">Create a goat:</h4>
          
          <p className="popup__input-label">Goat name:</p>
          <input className="popup__input" type="text" name="name" required minLength="2" maxLength="40" value={name} onChange={handleName} placeholder="Enter a name for your goat"></input>
          
          <p className="popup__input-label">Goat color:</p>
          <input className="popup__input" type="color" name="color" value={color} onChange={handleColor}></input>

          <p className="popup__input-label">Goat's favorite food:</p>
          <input className="popup__input" type="text" name="food" value={food} onChange={handleFood} placeholder="Enter your goat's favorite food"></input>

          <p className="popup__input-label">Goat's favorite activity:</p>
          <input className="popup__input" type="text" name="activity" value={activity} onChange={handleActivity} placeholder="Enter your goat's favorite activity"></input>

          <button className="popup__submit" type="submit">Send</button>
      </form>
      </div>
    </section>  
  )
}

export default PopupWithForm;