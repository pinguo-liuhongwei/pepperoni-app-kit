import { Map, List } from 'immutable';
import { loop, Effects } from 'redux-loop';
import getArtStyle from '../../utils/getArtStyle';
import ImageResizer from 'react-native-image-resizer';
import * as NavigationState from '../navigation/NavigationState';



// Initial state
const initialState = Map({
    alpha: 1,
    photo: {},
    effectedPhoto: {},
    imageLocalIsLoading: true,
});

// Actions
const ALPHA_CHANGED = 'EditCanvasViewState/ALPHA_CHANGED';
const RESIZE_IMAGE = 'EditCanvasViewState/RESIZE_IMAGE';
const RESIZE_IMAGE_PENDING = 'EditCanvasViewState/RESIZE_IMAGE_PENDING';
const RESIZE_IMAGE_FULFILLED = 'EditCanvasViewState/RESIZE_IMAGE_FULFILLED';
const RESIZE_IMAGE_REJECTED = 'EditCanvasViewState/RESIZE_IMAGE_REJECTED';

// Action creators
export function alphaChanged(alpha) {
    return { type: ALPHA_CHANGED, payload: alpha };
}


export function photoPicked(photo) {
    return dispatch => dispatch({ type: RESIZE_IMAGE, payload: imageResize(photo) })
        .then(()=>dispatch(NavigationState.showEditView()));
}

//pickedPhoto={fileSize,width,height,isVertical,origURL,uri}
//createResizedImage(pickedPhoto.uri, newWidth, newHeight, compressFormat, quality, rotation, outputPath)
export async function imageResize(pickedPhoto) {
    return ImageResizer.createResizedImage(pickedPhoto.uri, 1400, 1400, 'JPEG', 85)
        .then(function(resizedImageUri) {
            //const result={...pickedPhoto,uri:resizedImageUri};
            //console.log('EditCanvasViewState::imageResize',result);
            return pickedPhoto;
        })
        .catch((err) => {
            console.error('EditCanvasViewState::imageResize', pickedPhoto, err);
            return null;
        });
}

// Reducer
export default function EditCanvasViewStateReducer(state = initialState, action = {}) {
    switch (action.type) {
        case ALPHA_CHANGED:
            return state.set('alpha', action.payload);

        case RESIZE_IMAGE_PENDING:
            return state.set('imageLocalIsLoading', true).set('photo', {});
        case RESIZE_IMAGE_FULFILLED:
            
            return state
                .set('imageLocalIsLoading', false)
                .set('photo', action.payload);
        case RESIZE_IMAGE_REJECTED:
            return state
                .set('imageLocalIsLoading', false);

        default:
            return state;
    }
}
