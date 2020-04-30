import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="https://www.freelogodesign.org/file/app/client/thumb/bec0daa6-b374-4214-856c-744fcc1ced4f_200x200.png?1588166811785"
          alt="logo"
        ></img>
      </div>
      <div className="text-description">
        <p>Continuez de voyager et de vous cultiver</p>
        <div></div>
        <p>depuis votre canapé !</p>
        <div></div>
        <p className="phraseNico">
          ou comment rester sans rien faire sans rester bête
        </p>
      </div>
    </div>
  );
}

export default Navbar;
