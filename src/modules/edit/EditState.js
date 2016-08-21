import { Map } from 'immutable';
import { loop, Effects } from 'redux-loop';
import getArtStyle from '../../utils/getArtStyle';

// Initial state
const initialState = Map({

});

// Actions
const INCREMENT = 'EditState/INCREMENT';
const FILTER_SELECTED = 'EditState/FILTER_SELECTED';
const FILTERS_REQUEST = 'EditState/FILTERS_REQUEST';
const FILTERS_RESPONSE = 'EditState/FILTERS_RESPONSE';

// Action creators
export function increment() {
    return { type: INCREMENT };
}

export function filterSelected(filter) {
    return { type: FILTER_SELECTED, payload: filter };
}

export function random() {
    return {
        type: FILTERS_REQUEST
    };
}

export async function requestFilters() {
    return {
        type: FILTERS_RESPONSE,
        payload: await getArtStyle()
    };
}

// Reducer
export default function EditStateReducer(state = initialState, action = {}) {
    switch (action.type) {
        case INCREMENT:
            return state.update('value', value => value + 1);

        case FILTER_SELECTED:
            return state.set('selectedFilter', action.payload);

        case FILTERS_REQUEST:
            return loop(
                state.set('filterIsLoading', true),
                Effects.promise(requestFilters)
            );

        case FILTERS_RESPONSE:
            return state
                .set('filterIsLoading', false)
                .set('filterIsLoaded', true)
                .set('filters', action.payload);

        default:
            return state;
    }
}
