import { Map, List } from 'immutable';
import getArtStyle from '../../utils/getArtStyle';

// Initial state
const initialState = Map({
    filters: [],
    filterIsLoaded: false,
    filterIsLoading: true,
    selectedFilter: {},
});

// Actions
const INCREMENT = 'EditFilterBarState/INCREMENT';
const FILTER_SELECTED = 'EditFilterBarState/FILTER_SELECTED';
const REQUEST_FILTERS = 'EditFilterBarState/REQUEST_FILTERS';
const REQUEST_FILTERS_PENDING = 'EditFilterBarState/REQUEST_FILTERS_PENDING';
const REQUEST_FILTERS_FULFILLED = 'EditFilterBarState/REQUEST_FILTERS_FULFILLED';
const REQUEST_FILTERS_REJECTED = 'EditFilterBarState/REQUEST_FILTERS_REJECTED';

// Action creators
export function filterSelected(index) {
    return { type: FILTER_SELECTED, payload: index };
}


export function requestFilters() {
    return (dispatch, getState) => dispatch({
        type: REQUEST_FILTERS,
        payload: getArtStyle()
    });
}

// Reducer
export default function EditFilterBarStateReducer(state = initialState, action = {}) {
    switch (action.type) {

        case FILTER_SELECTED:
            return state.set('filters',
                state.get('filters').update(filters => filters.map((item, index) => {
                    item.selected = index == action.payload;
                    return item;
                }))
            );

        case REQUEST_FILTERS_PENDING:
            return state.set('filterIsLoading', true)
                .set('filterIsLoaded', false);

        case REQUEST_FILTERS_FULFILLED:
        console.dir(action.payload);
            return state.set('filterIsLoading', false)
                .set('filterIsLoaded', true)
                .set('filters', List(action.payload));

        case REQUEST_FILTERS_REJECTED:
            return state.set('filterIsLoading', false)
                .set('filterIsLoaded', false);

        default:
            return state;
    }
}
