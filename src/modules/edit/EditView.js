import * as NavigationState from '../../modules/navigation/NavigationState';
import pxToDp from '../../utils/pxToDp';
import getArtStyle from '../../utils/getArtStyle';
import EditCanvasViewContainer from './EditCanvasViewContainer';
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
    goHome: PropTypes.func.isRequired,
    alphaChanged: PropTypes.func.isRequired,
  },
  getInitialState() {
    return {};
  },
  componentWillMount() {
  },
  goHome() {
    this.props.goHome();
  },
  saveResult() {
    console.log('EditView', 'saveResult');
  },

  render() {
    return (<View style={styles.main}>
        <EditHeaderView style={styles.header} goBack={this.goHome} goNext={this.saveResult}/>
        <EditCanvasViewContainer style={styles.canvas} />
        <EditFilterBarViewContainer style={styles.filterBar} />
        <EditSliderBarView alphaChanged={this.props.alphaChanged} style={styles.sliderBar}  />
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