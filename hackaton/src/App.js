import React from 'react';
import Searchbar from './Searchbar';
import ListObjects from './ListObjects';
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
      <SearchTitle />
      <Searchbar />
      <ListObjects />

      <div>
        <Search />
      </div>
      <Footer />
    </div>
  );
}

export default App;
