import pxToDp from '../../utils/pxToDp';
import React, {PropTypes} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View
} from 'react-native';
import FitImage from 'react-native-fit-image';

const EditCanvasView = React.createClass({

  propTypes:{
    alpha:PropTypes.number.isRequired,
    photo:PropTypes.object.isRequired,
  },

	render() {
    //{uri:'data:image/jpg;base64,'+this.props.photo.data}
    //console.log('Edit Canvas view', this.props.alpha);
    //console.log('Edit Canvas view', this.props.photo);
    //<Image style={[styles.img, {opacity:this.props.alpha}]} source={this.props.photo} />
    return (<View style={styles.main}>
        <FitImage style={[styles.img, {opacity:this.props.alpha}]} 
          originalWidth={this.props.photo.width} originalHeight={this.props.photo.height}
          source={{uri:this.props.photo.uri||this.props.photo.get('uri')}} />
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