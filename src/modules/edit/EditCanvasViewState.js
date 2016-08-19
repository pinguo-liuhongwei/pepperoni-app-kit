import {Map,List} from 'immutable';
import {loop, Effects} from 'redux-loop';
import getArtStyle from '../../utils/getArtStyle';
import ImageResizer from 'react-native-image-resizer';

// Initial state
const initialState = Map({
    alpha:1,
    photo: {},
    effectedPhoto:{},
    imageLocalIsLoading:true,
});

// Actions
const ALPHA_CHANGED = 'EditCanvasViewState/ALPHA_CHANGED';
const IMAGE_RESIZE_REQUEST = 'EditCanvasViewState/IMAGE_RESIZE_REQUEST';
const IMAGE_RESIZE_RESPONSE = 'EditCanvasViewState/IMAGE_RESIZE_RESPONSE';

// Action creators
export function alphaChanged(alpha) {
  return {type: ALPHA_CHANGED,payload:alpha};
}


export function photoPicked(photo) {
  return {type: IMAGE_RESIZE_REQUEST,payload:photo};
}
 async function requestImageResize(photo) {
  return {
    type: IMAGE_RESIZE_RESPONSE,
    payload: await imageResize(photo)
  };
}

//pickedPhoto={fileSize,width,height,isVertical,origURL,uri}
//createResizedImage(pickedPhoto.uri, newWidth, newHeight, compressFormat, quality, rotation, outputPath)
export async function imageResize(pickedPhoto){
  return ImageResizer.createResizedImage(pickedPhoto.uri, 1400, 1400,'JPEG',85)
    .then(function(resizedImageUri){
      //const result={...pickedPhoto,uri:resizedImageUri};
      //console.log('EditCanvasViewState::imageResize',result);
      return pickedPhoto; 
    })
    .catch((err) => {
      console.error('EditCanvasViewState::imageResize',pickedPhoto,err);
      return null;
    });
}

// Reducer
export default function EditCanvasViewStateReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ALPHA_CHANGED:
      return state.set('alpha',  action.payload);

    case IMAGE_RESIZE_REQUEST:
      return loop(
        state.set('imageLocalIsLoading', true).set('photo',{}),
        Effects.promise(requestImageResize,action.payload)
      );
    case IMAGE_RESIZE_RESPONSE:
      return state
        .set('imageLocalIsLoading', false)
        .set('photo', action.payload);

    default:
      return state;
  }
}
