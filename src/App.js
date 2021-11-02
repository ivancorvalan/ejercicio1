import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';

function App() {
  return (
    < React.Fragment>
      <Header />
      <Navbar />
    </React.Fragment>
  );
}

export default App;
