import {connect} from 'react-redux';
import HomeView from './HomeView';
import {switchTab,RouteIndex} from '../navigation/NavigationState';


export default connect(
  state => ({
     tabs:state.getIn(['navigationState','tabs'])
    //tabEdit:state.getIn(['navigationState','tabs','routes']),
  }),
  dispatch => ({
    switchTab(index) {
      dispatch(switchTab(index));
    },
    photoSelected(photo){
      dispatch(photo);
    },

  })
)(HomeView);
