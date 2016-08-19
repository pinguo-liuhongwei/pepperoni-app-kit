import {connect} from 'react-redux';
import EditFilterBarView from './EditFilterBarView';

export default connect(
  state => state.get('editFilterBar').toJS()
  
)(EditFilterBarView);
