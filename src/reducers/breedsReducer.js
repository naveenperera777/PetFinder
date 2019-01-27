export default function animalReducer(state = "", action) {
  //   const newState = Object.assign({}, state, { location: action.payload });

  if (action.type === "SET_BREEDS") {
    return action.payload;
  } else {
    return state;
  }
}
