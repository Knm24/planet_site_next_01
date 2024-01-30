import React from 'react';

interface Planet {
  id: string;
  name: string;
}

interface HeaderProps {
  links: Planet[];
}

const Header: React.FC<HeaderProps> = ({ links }) => {
  return (
    <header className="header">
      <div className="logo">
        <a href="index.html">The Planets</a>
      </div>
      <input type="checkbox" id="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu-icon">
        &#9776;
      </label>
      <ul className="menu">
        <a href="/mercury">Mercury</a>
        <a href="/mars">Mars</a>
        <a href="/earth">Earth</a>
        <a href="/jupiter">Jupiter</a>
        <a href="/saturn">Saturn</a>
        <a href="/uranus">Uranus</a>
        <a href="/neptune">Neptune</a>
        <a href="/venus">Venus</a>
      </ul>
    </header>
  );
};

export default Header;
