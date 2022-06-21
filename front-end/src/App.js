import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import LoginPage from './Pages/LoginPage';

function App() {
  return (
    <main>
      <Routes>
        <Route exact path="/login" component={ LoginPage } />
      </Routes>
    </main>
  );
}

export default App;
