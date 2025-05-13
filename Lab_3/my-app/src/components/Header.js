import React from 'react';
import { Link } from 'react-router-dom';

function Header({title, backgroundColor }) {
  const headerStyle = {
    backgroundColor,
    color: 'white',
    textAlign: 'center',
    padding: '20px',
  };

  return (
    <header style={headerStyle}>
      <h1 className="my-plan">{title}</h1>
      <nav className="nav-links">
      <Link to="/" className="nav-link">Тренування</Link>
      <Link to="/progress" className="nav-link">Мій прогрес</Link>
      <Link to="/diet" className="nav-link">Раціон</Link>
      <Link to="/workout-journal" className="nav-link">Журнал тренувань</Link>
    </nav>
    </header>
  );
}

export default Header;
