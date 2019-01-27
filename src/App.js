import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Results from "./Results";
import Details from "./Details";
import SearchParams from "./SearchParams";
import pf from "petfinder-client";
import { Provider } from "./SearchContext";
import { Provider as ReduxProvider } from "react-redux";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // location: "Seattle, WA",
      animal: "",
      breed: "",
      breeds: [],
      handleAnimalChange: this.handleAnimalChange,
      // handleLocationChange: this.handleLocationChange,
      handleBreedChange: this.handleBreedChange,
      getBreeds: this.getBreeds
    };
  }

  // handleLocationChange = event => {
  //   this.setState(
  //     {
  //       location: event.target.value
  //     },
  //     this.getBreeds
  //   );
  // };

  handleAnimalChange = event => {
    this.setState(
      {
        animal: event.target.value
      },
      this.getBreeds
    );
  };

  handleBreedChange = event => {
    this.setState({
      breed: event.target.value
    });
  };

  getBreeds() {
    if (this.state.animal) {
      petfinder.breed.list({ animal: this.state.animal }).then(data => {
        if (
          data.petfinder &&
          data.petfinder.breeds &&
          Array.isArray(data.petfinder.breeds.breed)
        ) {
          this.setState({
            breeds: data.petfinder.breeds.breed
          });
        } else {
          this.setState({ breeds: [] });
        }
      });
    } else {
      this.setState({ breeds: [] });
    }
  }
  render() {
    return (
      <div>
        <header>
          <Link to={"/"}>Adopt Me!</Link>
          <Link to={"/search-params"}>
            <span aria-label="search" role="img">
              Search
            </span>
          </Link>
        </header>
        <ReduxProvider store={store}>
          <Provider value={this.state}>
            <Router>
              <Results exact path="/" />
              <Details path="/details/:animalid" />
              <SearchParams path="/search-params" />
            </Router>
          </Provider>
        </ReduxProvider>
      </div>
    );
  }
}
render(React.createElement(App), document.getElementById("root"));
