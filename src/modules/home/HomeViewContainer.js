import { connect } from 'react-redux';
import HomeView from './HomeView';
import * as EditCanvasViewState from '../edit/EditCanvasViewState';
var Platform = require('react-native').Platform;
var ImagePicker = require('react-native-image-picker');


export default connect(
    state => ({
    }),
    dispatch => ({
        gotoCamera() {
            // Launch Camera:
            const options = {};
            ImagePicker.launchCamera(options, (photo) => {
                return dispatch(EditCanvasViewState.photoPicked({...photo, data: null }));
            });
        },
        gotoAlbum() {
            // Open Image Library:
            const options = {};
            ImagePicker.launchImageLibrary(options, (photo) => {
                return dispatch(EditCanvasViewState.photoPicked({...photo, data: null }));
            });
        },

    })
)(HomeView);
