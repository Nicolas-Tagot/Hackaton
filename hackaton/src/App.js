import React from 'react';
import Searchbar from './Searchbar';
import Navbar from './Navbar';
import Footer from './Footer';


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
      <Searchbar />
      <div>
        </div>
      <Footer />
    </div>
  );
}
}

export default App;
