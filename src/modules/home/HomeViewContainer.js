import {connect} from 'react-redux';
import HomeView from './HomeView';
import {pushRoute, popRoute, switchTab, navigationCompleted} from '../navigation/NavigationState';


export default connect(
  state => ({
    home: state.getIn(['home', 'value']),
    loading: state.getIn(['home', 'loading']),
    tabs:state.getIn(['navigationState','tabs'])
  }),
  dispatch => ({
    switchTab(index) {
      dispatch(switchTab(index));
    }
  })
)(HomeView);
