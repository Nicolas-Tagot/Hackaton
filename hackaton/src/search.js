import React from 'react';
import axios from 'axios';
import "./search.css";


class Search extends React.Component {
constructor(props){
  super(props);
this.state = {
  arrObjets : ["test","deux"],
  pays : 'spain',
  periodeChecked: false,
  play: [],
  image : "",
  imageArr : [],
  imageSelect: 0,
  timer : 0,
};
this.show = this.show.bind(this);
this.showSui = this.showSui.bind(this);
this.componentDidMount = this.componentDidMount.bind(this);
this.image = this.image.bind(this);
};


  componentDidMount() {
    axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=${this.state.pays}`)
      .then(res => {
         this.arrObjets = res.data;
        console.log(this.arrObjets)
        })

  }
  componentDidUpdate(){
  this.play =  this.state.arrObjets.map( (num) => (
  <div>
    <p>{num}</p>
  </div>
))
  }

  show() {

    this.arrObjets = Object.values(this.arrObjets);
    this.arrObjets = this.arrObjets[1].slice(8, 1000)
    this.suit()
    }

suit(){
  console.log(this.arrObjets)
  this.arrObjets.map( (num) => (
      axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${num}`)
        .then(res => {
          this.image = res.data;
          this.image = this.image.primaryImageSmall;
          this.state.imageArr.push(this.image);
        })
      ));

        console.log(this.state.imageArr);

}
showSui(){


}

image(){

  for(let i=0; i < 101; i++){
      let solution = this.state.imageArr[i];
      this.timer = setTimeout(() => this.setState({imageSelect : i}), i*1000)
  }
  console.log("end")
  const { periodeChecked: isChecked } = this.state;
  this.setState({ periodeChecked: !isChecked });
}

render(){

  return(
  <div>
  <div className="btn" onClick={this.show}> Charge </div>
  <div className="btn" onClick={this.image}> Send </div>
{this.state.periodeChecked
  ?<div><p>Accrochez vous !</p>
      <img className="pitchoune" src={this.state.imageArr[this.state.imageSelect]} alt={this.state.imageSelect} /></div>
: null}
  </div>
)
}
}

export default Search;
