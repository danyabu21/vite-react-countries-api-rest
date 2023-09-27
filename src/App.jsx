import { useState } from 'react';
import './App.scss';
import { Navbar } from './components/navbar';
import { Main } from './components/main';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Main />
    </div>
  );
};

export default App;
