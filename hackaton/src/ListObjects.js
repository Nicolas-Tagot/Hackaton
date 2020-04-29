import react, { Component } from "react";

const testArr = [
  { title: "Mug", country: "UK", image: "some url" },
  { title: "Spoon", country: "France", image: "some url" },
  { title: "Vineyard", country: "Italy", image: "some url" },
];

function ListObjects(props) {
  function getTheObjects(testArr) {
    return testArr.map((objet) => {
      <div>
        <li>{objet.image}</li>
        <li>{object.title}</li>
        <li>{object.country}</li>
      </div>;
    });
  }

  return <ul>{getTheObjects}</ul>;
}

// //     return <li>{props.value}</li>;
// //   }
// //   function Objects(props) {
// //     const numbers = props.numbers;
// //     const listItems = numbers.map((number) =>
// //       // Correct ! La clé doit être spécifiée dans le tableau.
// //       <ListObjects key={number.toString()}              value={number} />
// //     );
// //     return (
// //       <ul>
// //         {listItems}
// //       </ul>
// //     );

export default ListObjects;
