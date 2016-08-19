import {connect} from 'react-redux';
import EditCanvasView from './EditCanvasView';

export default connect(
  state => state.get('editCanvas').toJS()
  
)(EditCanvasView);
