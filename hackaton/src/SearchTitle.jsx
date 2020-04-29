import React from 'react';
import axios from 'axios';

class SearchTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listTitle: [],
      title: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      title: event.target.value,
    });
  }
  componentDidMount() {
    const listOfTitle = this.loadTitle();
  }
  loadTitle() {
    axios
      .get(
        `https://collectionapi.metmuseum.org/public/collection/v1/search?q={$title}`
      )
      .then((response) => response.data)
      .then((data) => {
        this.setState({
          title: data.title,
        });
      });
  }
  render() {
    return (
      <div className="input-title">
        <input
          type="text"
          placeholder="Nom de l'oeuvre"
          value={this.state.title}
          onChange={this.handleChange}
          list="data"
        />
        <datalist id="data">
          {this.state.listTitle.map((item, key) => (
            <option key={key} value={item.title} />
          ))}
        </datalist>
      </div>
    );
  }
}

export default SearchTitle;
