import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  handleTitleClick() {
    alert("You clicked!");
  }
  render() {
    // return React.createElement("div", {}, [
    //   React.createElement("h1", { onClick: this.handleTitleClick }, "Adopt Me"),
    //   React.createElement(Pet, {
    //     name: "Jake",
    //     animal: "Dog",
    //     breed: "GSD"
    //     // onClick: this.handleTitleClick
    //   }),
    //   React.createElement(Pet, {
    //     name: "Pepper",
    //     animal: "Bird",
    //     breed: "Cockatiel"
    //   }),
    //   React.createElement(Pet, {
    //     name: "Doink",
    //     animal: "Cat",
    //     breed: "Mixed"
    //   })
    // ]);
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
