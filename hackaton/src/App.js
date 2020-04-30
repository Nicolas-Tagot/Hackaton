import React from 'react';
import Searchbar from './Searchbar';
import Navbar from './Navbar';
import Footer from './Footer';
import SearchTitle from './SearchTitle';
import ImageAccueil from './ImageAccueil';
import Search from './search';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ImageAccueil />
      <Searchbar />
      <div>
        <Search />
      </div>
      <SearchTitle />
      <Footer />
    </div>
  );
}

export default App;
