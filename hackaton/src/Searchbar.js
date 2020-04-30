import React, { Component } from 'react';
import './Searchbar.css';
//import axios from "axios";

const testArr = [
  { title: 'Mug', country: 'UK', image: 'some url' },
  { title: 'Spoon', country: 'France', image: 'some url' },
  { title: 'Vineyard', country: 'Italy', image: 'some url' },
];

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listCountry: testArr,
      defaultInput: 'Pays',
    };
  }

  //  handleClick() {
  //
  //  }

  render() {
    return (
      <div className="searchbar-container">
        <h3>Saisissez le pays dans lequel vous souhaitez partir :</h3>
        <input
          id="country"
          type="text"
          placeholder={this.defaultInput}
          list="data-country"
          className="champrech"
        />
        <datalist id="data-country">
          {this.state.listCountry.map((item, key) => (
            <option key={key} value={item.country} />
          ))}
        </datalist>
        <button /*onClick={this.handleClick()}*/>Go !</button>
      </div>
    );
  }
}

export default Searchbar;
