import { combineReducers } from "redux";
import location from "./locationReducer";
import animal from "./animalReducer";
import breed from "./breedReducer";
import breeds from "./breedsReducer";

export default combineReducers({
  location,
  animal,
  breed,
  breeds
});
