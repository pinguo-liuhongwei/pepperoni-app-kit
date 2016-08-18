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

    console.log('Edit Canvas view', this.props.photo);

    return (<View style={styles.main}>
        <Image style={styles.img} source={this.props.photo} />
    	</View>
    )}

});

const styles = StyleSheet.create({
  main: {
    backgroundColor:0x808080ff,
    flex: 1,
    flexDirection:'column',
    alignItems:'stretch',
  },
  img:{
    flex:1,
    resizeMode:'contain',
  }
});

export default EditCanvasView;