import React from 'react';
import './Navbar.scss';
import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle';

const Navbar = () => {
  const [mode, setMode] = React.useState('dark');
  return (
    <nav className="navbar navbar-light  p-2 p-sm-4 shadow-sm">
      <div className="p-2 p-sm-0">
        <span className="navbar-brand mb-0 h1  p-2 p-sm-0">
          Where in the World?
        </span>
      </div>
      <DarkModeToggle
        mode={mode}
        dark="Dark"
        light="Light"
        size="sm"
        onChange={(mode) => {
          setMode(mode);
        }}
      />
    </nav>
  );
};

export default Navbar;
