import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home';
import Pringles from './Pringles';
import KitKat from './KitKat';
import ProteinBar from './ProteinBar';
import NavBar from './NavBar';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Route exact path='/'>
          <NavBar />
          <Home />
        </Route>

        <Route exact path='/pringles'>
          <Link exact to='/'>
            Go back
          </Link>
          <Pringles />
        </Route>
        <Route exact path='/kitkat'>
          <KitKat />
        </Route>
        <Route exact path='/proteinbar'>
          <ProteinBar />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
