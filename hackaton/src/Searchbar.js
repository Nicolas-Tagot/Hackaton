import React, { Component } from 'react';
import './Searchbar.css';
import Search from './search';
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
      affiche: false,
      value: '',
    };
    this.eventer = this.eventer.bind(this);
  }

  handleClick() {
    const { affiche: isChecked } = this.state;
    this.setState({ affiche: !isChecked });
    console.log('click');
  }

  eventer(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="searchbar-container">
        <h3>Ou voulez vous aller ?</h3>
        <label htmlFor="country">Pays : </label>

        <input type="text" value={this.state.value} onChange={this.eventer} />

        <datalist id="data-country">
          {this.state.listCountry.map((item, key) => (
            <option key={key} value={item.country} />
          ))}
        </datalist>

        <button onClick={() => this.handleClick()}>{this.state.value}</button>

        {this.state.affiche ? <Search paysSellect={this.state.value} /> : null}
      </div>
    );
  }
}

export default Searchbar;
