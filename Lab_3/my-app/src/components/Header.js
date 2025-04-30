import React from 'react';
import { Link } from "react-router-dom";

function Header({ title }) {
  return (
    <header>
      <h1 className="my-plan">{title}</h1>
      <nav>
        <Link to="/">Тренування</Link>
        <Link to="/progress">Мій прогрес</Link>
        <Link to="/diet">Раціон</Link>
        <Link to="/workout-journal">Журнал тренувань</Link>
      </nav>
    </header>
  );
}

export default Header;
