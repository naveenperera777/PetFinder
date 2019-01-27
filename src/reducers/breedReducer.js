export default function breedReducer(state = "", action) {
  // const newState = Object.assign({}, state, { location: action.payload });

  if (action.type === "SET_BREED") {
    return action.payload;
  } else if (action.type === "SET_ANIMAL") {
    return "";
  } else {
    return state;
  }
}
