import pxToDp from '../../utils/pxToDp';
import React, {PropTypes} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View
} from 'react-native';

const EditCanvasView = React.createClass({
	render() {

    return (<View style={styles.main}>
        <Text>EditCanvasView</Text>

    	</View>
    )}
});

const styles = StyleSheet.create({
  main: {
    backgroundColor:0xff000010,
    flex: 1,
    flexDirection:'column',
    alignItems:'stretch',
  },
});

export default EditCanvasView;