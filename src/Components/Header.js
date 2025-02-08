import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>ElEnemigos</h1>
      <nav>
        <a href="/">Inicio</a>
        <a href="/about">Sobre nosotros</a>
        <a href="/contact">Contacto</a>
      </nav>
    </header>
  );
};

export default Header;



