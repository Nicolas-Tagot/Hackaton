import React, { Component } from "react";
import './ListObjects.css';

const testArr = [
  { title: "Mug", primaryImageSmall: "UK", objectURL: "some url" },
  { title: "Ladle", primaryImageSmall: "https://images.metmuseum.org/CRDImages/eg/web-large/12.187.29_EGDP012151.jpg", objectURL: "https://www.metmuseum.org/art/collection/search/570825" },
  { title: "Vineyard", primaryImageSmall: "Italy", objectURL: "some url" },
];

class ListObjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listObjects: testArr,
    };
  }

  render () {
    const newArr = testArr.map((object) => (
      <li className="object"><img src={object.primaryImageSmall} alt={object.title}></img> {object.title} <a href={object.objectURL}>lien</a></li>
    ))

    return (
      <ul className="objectsContainer">
        {newArr}
      </ul>
    )
    }
}

export default ListObjects;