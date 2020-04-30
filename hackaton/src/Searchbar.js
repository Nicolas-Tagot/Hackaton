import React, { Component } from "react";
import './Searchbar.css';
import Search from "./search";
//import axios from "axios";

const testArr = [
  { country: "France" },
  { country: "Spain" },
  { country: "Portugal" },
  { country: "Brasil" },
  { country: "Argentina" },
  { country: "England" },
  { country: "Scotland" },
  { country: "Germany" },
  { country: "Poland" },
  { country: "Sweden" },
  { country: "Ireland" },
];



class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listCountry: testArr,
      defaultInput: "Pays",
      affiche : false,
      value : ''
    };
this.eventer=this.eventer.bind(this);
  }


  handleClick() {



    const { affiche: isChecked } = this.state;
    this.setState({ affiche: !isChecked });
    console.log("click");
}

      eventer(event){
        this.setState({value: event.target.value});
        }


  render() {
    return (
      <div className="searchbar-container">
        <h3>Ou voulez vous aller ?</h3>
        <label htmlFor="country">Pays : </label>

        <input type="text" value={this.state.value} onChange={this.eventer} list="data-country"/>

        <datalist id="data-country">
         {this.state.listCountry.map((item, key) => (
           <option key={key} value={item.country} />
         ))}
       </datalist>

       <button onClick={() => this.handleClick()}>Ok !</button>

       {this.state.affiche ?  <Search paysSellect={this.state.value} /> : null }
      </div>
    );
  }
}

export default Searchbar;


// render() {
//   return (
//     <div className="searchbar-container">
//       <h3>Ou voulez vous aller ?</h3>
//       <label htmlFor="country">Pays : </label>
//       <input
//         id="country"
//         type="text"
//         placeholder={this.defaultInput}
//         list="data-country"
//       />
//       <datalist id="data-country">
//        {this.state.listCountry.map((item, key) => (
//          <option key={key} value={item.country} />
//        ))}
//      </datalist>
//      <button /*onClick={this.handleClick()}*/>Go !</button>
//     </div>
//   );
// }
// }
