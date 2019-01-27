import React from "react";
import pf from "petfinder-client";
import { render } from "react-dom";
import Pet from "./Pet";
import SearchBox from "./SearchBox";
// import { Consumer } from "./SearchContext";
import { connect } from "react-redux";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});
class Results extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: []
    };
  }
  componentDidMount() {
    this.search();
  }
  search = () => {
    petfinder.pet
      .find({
        output: "full",
        location: this.props.location,
        animal: this.props.animal,
        breed: this.props.breed
      })
      .then(data => {
        let pets;

        if (data.petfinder.pets && data.petfinder.pets.pet) {
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet;
          } else {
            pets = [data.petfinder.pets.pet];
          }
        } else {
          pets = [];
        }
        console.log(pets);

        this.setState({
          pets: pets
        });
      });
  };

  render() {
    return (
      <div className="search">
        <SearchBox search={this.search} />
        {this.state.pets.map(pet => {
          let breed;

          if (Array.isArray(pet.breeds.breed)) {
            breed = pet.breeds.breed.join(". ");
          } else {
            breed = pet.breeds.breed;
          }

          const x = "My dog is" % { breed };

          return (
            <Pet
              key={pet.id}
              id={pet.id}
              animal={pet.animal}
              name={pet.name}
              breed={breed}
              media={pet.media}
              location={`${pet.contact.city}, ${pet.contact.state}`}
            />
          );
        })}
      </div>
    );
  }
}
// function ResultsWithContext(props) {
//   return (
//     <Consumer>
//       {context => <Results {...props} searchParams={context} />}
//     </Consumer>
//   );
// }

const mapStateToProps = ({ location, breed, animal }) => {
  return { location, animal, breed };
};

export default connect(mapStateToProps)(Results);
