const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h1", {}, props.breed)
  ]);
};
class App extends React.Component {
  handleTitleClick() {
    alert("You clicked!");
  }

  render() {
    return React.createElement("div", {}, [
      React.createElement("h1", { onClick: this.handleTitleClick }, "Adopt Me"),
      React.createElement(Pet, {
        name: "Jake",
        animal: "Dog",
        breed: "GSD",
        onClick: this.handleTitleClick
      }),
      React.createElement(Pet, {
        name: "Pepper",
        animal: "Bird",
        breed: "Cockatiel"
      }),
      React.createElement(Pet, {
        name: "Doink",
        animal: "Cat",
        breed: "Mixed"
      })
    ]);
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
