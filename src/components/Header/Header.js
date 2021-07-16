import React from 'react';
import { Link } from 'react-router-dom';

function Header(props){

  return(
    <section className="header">
    <h1 className="header__title">Terry's Blog</h1>
    <nav className="header__nav">
      <a className="header__link" href="#">About Me</a> {/*landing page*/}
      <a className="header__link" href="#">About My Goats</a>
    </nav>
    </section>
  )
}

export default Header;