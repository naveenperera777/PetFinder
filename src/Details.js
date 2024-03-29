import React from "react";
import pf from "petfinder-client";
import { navigate } from "@reach/router/lib/history";
import Carousel from "./Carousel";
import SearchBox from "./SearchBox";
// import { Consumer } from "./SearchContext";
import Modal from "./Modal";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});
class Details extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }
  state = {
    loading: true,
    showModal: false
  };
  toggleModal = () => this.setState({ showModal: !this.state.showModal });
  componentDidMount() {
    petfinder.pet
      .get({
        output: "full",
        id: this.props.animalid
      })
      .then(data => {
        const pet = data.petfinder.pet;
        let breed;
        if (Array.isArray(pet.breeds.breed)) {
          breed = pet.breeds.breed.join(", ");
        } else {
          breed = pet.breeds.breed;
        }
        this.setState({
          name: pet.name,
          animal: pet.animal,
          location: `${pet.contact.city}, ${pet.contact.state}`,
          description: pet.description,
          media: pet.media,
          breed: breed,
          loading: false
        });
      })
      .catch(() => {
        navigate("/");
      });
  }

  render() {
    console.log("animal", this.state.name); // undefined

    if (this.state.loading) {
      return <h1>loading.....</h1>;
    }
    const {
      animal,
      breed,
      location,
      description,
      media,
      showModal
    } = this.state;

    return (
      <div className="details">
        <div className="search">
          <SearchBox />
        </div>
        <Carousel media={media} />
        <div onClick={console.log} />
        <div>
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {location}
          </h2>
          <button onClick={this.toggleModal}>
            Adopt {name} at {location}
          </button>
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <h1>Would you like to adopt {name}</h1>
              <div className="buttons">
                <button onClick={this.toggleModal}>Yes</button>
                <button onClick={this.toggleModal}>Absolutely!</button>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Details;
