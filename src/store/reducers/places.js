
import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from '../actions/actionTypes';

const initialState = {
  places: [],
  selectedPlace: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random().toString(),
          name: action.placeName,
          image: {
            uri: 'data:image/png;base64,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',
          },
        }),
      };
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter((place) => {
          return place.key !== state.selectedPlace.key;
        }),
        selectedPlace: null,
      };
    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find((place) => {
          return place.key === action.placeKey;
        })
      };
    case DESELECT_PLACE:
      return {
        ...state,
        selectedPlace: null,
      };
    default:
      return state;
  } 
};

export default reducer;