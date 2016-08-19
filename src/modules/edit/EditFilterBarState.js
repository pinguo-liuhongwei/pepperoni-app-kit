import {Map,List} from 'immutable';
import {loop, Effects} from 'redux-loop';
import getArtStyle from '../../utils/getArtStyle';

// Initial state
const initialState = Map({
    filters: [],
    filterIsLoaded:false,
    filterIsLoading:true,
    selectedFilter:{},
});

// Actions
const INCREMENT = 'EditFilterBarState/INCREMENT';
const FILTER_SELECTED = 'EditFilterBarState/FILTER_SELECTED';
const FILTERS_REQUEST = 'EditFilterBarState/FILTERS_REQUEST';
const FILTERS_RESPONSE = 'EditFilterBarState/FILTERS_RESPONSE';

// Action creators
export function increment() {
  return {type: INCREMENT};
}

export function filterSelected(index) {
  return {type: FILTER_SELECTED,payload:index};
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
export default function EditFilterBarStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case INCREMENT:
      return state.update('value', value => value + 1);

    case FILTER_SELECTED:
      return state.set('filters', 
        state.get('filters').update(filters=>  filters.map( (item,index)=>{ 
          item.selected=index==action.payload; return item; })
        )
      );

    case FILTERS_REQUEST:
      return loop(
        state.set('filterIsLoading', true),
        Effects.promise(requestFilters)
      );

    case FILTERS_RESPONSE:
      return state
        .set('filterIsLoading', false)
        .set('filterIsLoaded', true)
        .set('filters', List(action.payload));

    default:
      return state;
  }
}
