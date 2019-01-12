import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import Results from "./Results";
import Details from "./Details";
// import

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>
        <Router>
          <Results exact path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    );
  }
}

render(React.createElement(App), document.getElementById("root"));
