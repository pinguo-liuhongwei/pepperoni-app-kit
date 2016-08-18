import {connect} from 'react-redux';
import EditView from './EditView';
import { switchTab, RouteIndex} from '../navigation/NavigationState';


export default connect(
  state => ({
    photo: state.getIn(['home', 'photo']),
    tabs:state.getIn(['navigationState','tabs'])
  }),
  dispatch => ({
    switchTab(index) {
      dispatch(switchTab(index));
    },
  })
)(EditView);
