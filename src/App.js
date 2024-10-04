import React from 'react';
import Navigation from './components/Navigation.js';
import './styles/tailwind.css';
import Header from './components/Header';
import Stack from './components/Stack';

function App() {
  return (
    <div>
      <Navigation />
      <Header/>
      <Stack />
    </div>
  );
}

export default App;
