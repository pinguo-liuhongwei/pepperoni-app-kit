import * as NavigationState from '../../modules/navigation/NavigationState';
import pxToDp from '../../utils/pxToDp';
import getArtStyle from '../../utils/getArtStyle';
import EditCanvasView from './EditCanvasView';
import EditSliderBarView from './EditSliderBarView';
import EditHeaderView from './EditHeaderView';
import EditFilterBarViewContainer from './EditFilterBarViewContainer';
import React, {
  PropTypes
} from 'react';
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
  getInitialState() {
    return {
      alpha: 1,
    };
  },
  componentWillMount() {
  },
  gotoCamera() {
    console.log('EditView', 'gotoCamera');
  },
  gotoAlbum() {
    console.log('EditView', 'gotoAlbum', this.props.tabs.getIn('routes', 0));
    this.props.switchTab(0);
  },

  alphaChanged(value) {
    this.setState({
      alpha: value
    });
  },

  render() {
    return (<View style={styles.main}>
        <EditHeaderView style={styles.header} goBack={this.gotoAlbum} goNext={this.gotoAlbum}></EditHeaderView>
        <EditCanvasView style={styles.canvas} photo={this.props.photo}  alpha={this.state.alpha} ></EditCanvasView>
        <EditFilterBarViewContainer style={styles.filterBar} />
        <EditSliderBarView style={styles.sliderBar} alpha={this.state.alpha} alphaChanged={this.alphaChanged} />
      </View>)
  }
});


const styles = StyleSheet.create({
  main: {
    backgroundColor: 0xff000000,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
});

export default EditView;