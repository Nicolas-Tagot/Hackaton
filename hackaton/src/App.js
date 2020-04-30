import React from 'react';
import Searchbar from './Searchbar';
import ListObjects from './ListObjects';
import Navbar from './Navbar';
import Footer from './Footer';
import SearchTitle from './SearchTitle';
import ImageAccueil from './ImageAccueil';
import Search from './search';


class App extends React.Component{

constructor(props){
  super(props);
  this.state = {
    pays : "france",
  };
  this.blue = this.blue.bind(this);
}

blue(value){
  console.log(value)
}

render(){
  this.state.pays = this.props.paysSellect;
  return (
    <div className="App">
      <Navbar />
      <ImageAccueil />
      <SearchTitle />
      <Searchbar />
      <ListObjects />
      <Footer />
    </div>
  );
}
}

export default App;
