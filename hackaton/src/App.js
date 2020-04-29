import React from 'react';
import Searchbar from './Searchbar';
import Navbar from './Navbar';
import Footer from './Footer';
import Search from "./search";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Searchbar />
      <Search />
      <Footer />
    </div>
  );
}

export default App;
