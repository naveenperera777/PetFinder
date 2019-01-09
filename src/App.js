import React from "react";
import pf from "petfinder-client";
import { render } from "react-dom";
import Pet from "./Pet";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});
class App extends React.Component {
  componentDidMount() {
    const promise = petfinder.breed.list({ animal: "dog" });
    promise.then(console.log, console.error);
  }

  handleTitleClick() {
    alert("You clicked!");
  }
  // render() {
  //   // return React.createElement("div", {}, [
  //   //   React.createElement("h1", { onClick: this.handleTitleClick }, "Adopt Me"),
  //   //   React.createElement(Pet, {
  //   //     name: "Jake",
  //   //     animal: "Dog",
  //   //     breed: "GSD"
  //   //     // onClick: this.handleTitleClick
  //   //   }),
  //   //   React.createElement(Pet, {
  //   //     name: "Pepper",
  //   //     animal: "Bird",
  //   //     breed: "Cockatiel"
  //   //   }),
  //   //   React.createElement(Pet, {
  //   //     name: "Doink",
  //   //     animal: "Cat",
  //   //     breed: "Mixed"
  //   //   })
  //   // ]);
  // }
  render() {
    return (
      <div>
        <h1 onClick={this.handleTitleClick}>"Adopt Me!"</h1>
        <Pet name="Jake" animal="Dog" breed="gsd" />
        <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
        <Pet name="Doink" animal="Cat!" breed="Mixed" />
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById("root"));
