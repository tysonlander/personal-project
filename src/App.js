import React from 'react';
import './App.css';
import './styling/style.scss'
import { HashRouter } from 'react-router-dom'
import router from './router'

function App() {
  return (
    <HashRouter>
      {router}
    </HashRouter>
  );
}

export default App;
