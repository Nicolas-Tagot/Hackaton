import React from 'react';
import Searchbar from './Searchbar';
import Navbar from './Navbar';
import Footer from './Footer';
import Search from './search';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Searchbar />
      <div>
        <Search />
      </div>
      <Footer />
    </div>
  );
}

export default App;
