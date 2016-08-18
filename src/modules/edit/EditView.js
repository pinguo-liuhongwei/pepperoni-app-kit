import * as EditState from './EditState';
import * as NavigationState from '../../modules/navigation/NavigationState';
import pxToDp from '../../utils/pxToDp';
import EditCanvasView from './EditCanvasView';
import EditSliderBarView from './EditSliderBarView';
import EditHeaderView from './EditHeaderView';
import EditFilterBarView from './EditFilterBarView';
import React, {PropTypes} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View
} from 'react-native';

const EditView = React.createClass({
  propTypes: {
    switchTab: PropTypes.func.isRequired
  },
  gotoCamera() {
    console.log('EditView', 'gotoCamera');
  },
  gotoAlbum() {
    console.log('EditView', 'gotoAlbum',this.props.tabs.getIn('routes',0));
    this.props.switchTab(0);
  },
  random() {
    this.props.dispatch(EditState.random());
  },

  render() {
    return (<View style={styles.main}>
<EditHeaderView style={styles.header} goBack={this.gotoAlbum} goNext={this.gotoAlbum} />
<EditCanvasView style={styles.canvas} />
<EditFilterBarView style={styles.filterBar} />
<EditSliderBarView style={styles.sliderBar} />
      </View>);
  }
});


const styles = StyleSheet.create({
  main: {
    backgroundColor:0xff000010,
    flex: 1,
    flexDirection:'column',
    alignItems:'stretch',
  },
});

export default EditView;
