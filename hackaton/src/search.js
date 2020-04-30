import React from 'react';
import axios from 'axios';
import "./search.css";
import "./load.gif";

class Search extends React.Component {
constructor(props){
  super(props);
this.state = {
  arrObjets : ["test","deux"],
  pays : "italie",
  periodeChecked: false,
  play: [],
  image : "",
  imageArr : [],
  imageSelect: 0,
  timer : 0,
  definition : [],
  defArr : []

};
this.show = this.show.bind(this);
this.showSui = this.showSui.bind(this);
this.componentDidMount = this.componentDidMount.bind(this);
this.imagere = this.imagere.bind(this);
};


  componentDidMount() {
    axios.get(`https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=${this.props.paysSellect}`)
      .then(res => {
         this.arrObjets = res.data;
        console.log(this.arrObjets)
        })
        this.timer = setTimeout(() => this.show(), 9000)

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
    this.arrObjets = this.arrObjets[1].slice(8, 500)
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

          this.definition = res.data;
          this.definition = this.definition.objectDate;
          this.state.defArr.push(this.definition);
      

        })
      ));

        console.log(this.state.imageArr);
        this.timer = setTimeout(() => this.imagere(), 800)

}
showSui(){


}

imagere(){

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

{this.state.periodeChecked
  ?<div><p>Accrochez vous !</p>
      <img className="pitchoune" src={this.state.imageArr[this.state.imageSelect]} alt={this.state.imageSelect} />
      <p>date : "{this.state.defArr[this.state.imageSelect]}"</p>
      </div>
: <img src="https://flevix.com/wp-content/uploads/2019/07/Ring-Preloader.gif" />}
  </div>
)
}
}

export default Search;
