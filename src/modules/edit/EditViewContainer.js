import {connect} from 'react-redux';
import EditView from './EditView';
import { switchTab, RouteIndex} from '../navigation/NavigationState';


export default connect(
  state => ({
    edit: state.getIn(['edit', 'value']),
    loading: state.getIn(['edit', 'loading']),
    tabs:state.getIn(['navigationState','tabs'])
  }),
  dispatch => ({
    switchTab(index) {
      dispatch(switchTab(index));
    },
  })
)(EditView);
