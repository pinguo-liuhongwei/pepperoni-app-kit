import { Map } from 'immutable';
import { loop, Effects } from 'redux-loop';
import { generateRandomNumber } from '../../services/randomNumberService';

// Initial state
const initialState = Map({});

// Actions
const RANDOM_RESPONSE = 'HomeState/RANDOM_RESPONSE';


export async function requestRandomNumber() {
    return {
        type: RANDOM_RESPONSE,
        payload: await generateRandomNumber()
    };
}

// Reducer
export default function HomeStateReducer(state = initialState, action = {}) {
    switch (action.type) {

        case RANDOM_RESPONSE:
            return state
                .set('loading', false)
                .set('value', action.payload);

        default:
            return state;
    }
}
