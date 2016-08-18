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

  propTypes:{
    alpha:PropTypes.number.isRequired,
    photo:PropTypes.object.isRequired,
  },

	render() {

    console.log('Edit Canvas view', this.props.alpha);
    //<Image style={[styles.img, {opacity:this.props.alpha}]} source={this.props.photo} />
    return (<View style={styles.main}>
        <Image style={styles.img} source={{uri:'data:image/jpg;base64,'+this.props.photo.data}} />
    	</View> 
    )}

});

const styles = StyleSheet.create({
  main: {
    backgroundColor:0x808080ff,
    flex: 1,
    alignItems:'stretch',
  },
  img:{
    flex:1,
    resizeMode:'contain',
  }
});

export default EditCanvasView;