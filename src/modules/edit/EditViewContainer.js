import { connect } from 'react-redux';
import EditView from './EditView';
import * as NavigationState from '../navigation/NavigationState';
import * as EditCanvasViewState from './EditCanvasViewState';

export default connect(
    state => ({
        tabs: state.getIn(['navigationState', 'tabs'])
    }),
    dispatch => ({
        goHome() {
            dispatch(NavigationState.popRoute());
        },
        alphaChanged(alpha) {
            dispatch(EditCanvasViewState.alphaChanged(alpha));
        }
    })
)(EditView);
