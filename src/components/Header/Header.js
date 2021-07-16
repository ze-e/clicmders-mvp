import React from 'react';

function Header(props){

  return(
    <section className="header">
    <h1 className="header__title">Terry's Blog</h1>
    <nav className="header__nav">
      <a className="header__link" href="https://hackathon-landing.vercel.app/" target="_blank" rel="noreferrer">About Me</a> 
      <a className="header__link" href="#goats">About My Goats</a>
    </nav>
    </section>
  )
}

export default Header;