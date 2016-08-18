import {Map} from 'immutable';
import {loop, Effects} from 'redux-loop';
import {generateRandomNumber} from '../../services/randomNumberService';

// Initial state
const initialState = Map({
  photo:null,
});

// Actions
const PHOTO_SELECTED = 'HomeState/PHOTO_SELECTED';
const RANDOM_RESPONSE = 'HomeState/RANDOM_RESPONSE';

export function photoSelected(photo) {
  return {
    type: PHOTO_SELECTED,
    payload:photo,
  };
}

export async function requestRandomNumber() {
  return {
    type: RANDOM_RESPONSE,
    payload: await generateRandomNumber()
  };
}

// Reducer
export default function HomeStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case PHOTO_SELECTED:
      return state.set('photo', action.payload);

    case RANDOM_RESPONSE:
      return state
        .set('loading', false)
        .set('value', action.payload);

    default:
      return state;
  }
}
