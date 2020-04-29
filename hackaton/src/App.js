import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SearchTitle from './SearchTitle';
import ImageAccueil from './ImageAccueil';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ImageAccueil />
      <SearchTitle />
      <Footer />
    </div>
  );
}

export default App;
