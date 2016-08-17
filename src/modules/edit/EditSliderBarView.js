import pxToDp from '../../utils/pxToDp';
import React, {PropTypes} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View
} from 'react-native';

const EditSliderBarView = React.createClass({
	render() {

    return (<View style={styles.main}>
        <Text>EditSliderBarView</Text>

    	</View>
    )}
});

const styles = StyleSheet.create({
  main: {
    backgroundColor:0x00ff0010,
    flex: 0,
    flexDirection:'column',
    alignItems:'stretch',
    height:pxToDp(100),
  },
});

export default EditSliderBarView;