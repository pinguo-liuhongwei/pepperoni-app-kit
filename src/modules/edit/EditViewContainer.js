import {connect} from 'react-redux';
import EditView from './EditView';
import { switchTab, RouteIndex} from '../navigation/NavigationState';
import * as EditCanvasViewState from './EditCanvasViewState';

export default connect(
  state => ({
    tabs:state.getIn(['navigationState','tabs'])
  }),
  dispatch => ({
    switchTab(index) {
      dispatch(switchTab(index));
    },
    alphaChanged(alpha){
    	dispatch(EditCanvasViewState.alphaChanged(alpha));
    }
  })
)(EditView);
