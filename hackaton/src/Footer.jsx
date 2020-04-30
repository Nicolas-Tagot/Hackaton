import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="logo">
        <img
          src="https://www.freelogodesign.org/file/app/client/thumb/bec0daa6-b374-4214-856c-744fcc1ced4f_200x200.png?1588166811785"
          alt="logo"
        ></img>
      </div>
      <div className="lienMET">
        <p>Pour rejoindre le site officiel du musée, cliquez ici :</p>
        <div></div>
        <a href="https://www.metmuseum.org/" className="lienmusee">
          MET Museum
        </a>
      </div>
    </div>
  );
}

export default Footer;
