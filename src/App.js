import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Pringles from './Pringles';
import KitKat from './KitKat';
import ProteinBar from './ProteinBar';
import NavBar from './NavBar';
import BackBar from './BackBar';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Route exact path='/'>
          <NavBar />
          <Home />
        </Route>

        <Route exact path='/pringles'>
          <BackBar />
          <Pringles />
        </Route>
        <Route exact path='/kitkat'>
          <BackBar />
          <KitKat />
        </Route>
        <Route exact path='/proteinbar'>
          <BackBar />
          <ProteinBar />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
