import pxToDp from '../../utils/pxToDp';
import React, {PropTypes} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
//import FitImage from 'react-native-fit-image';
//const AnimatableFitImage = Animatable.createAnimatableComponent(FitImage);


const EditCanvasView = React.createClass({

  propTypes:{

    alpha:PropTypes.number.isRequired,
    imageLocalIsLoading:PropTypes.bool.isRequired,
    photo:PropTypes.object.isRequired,
  },

  _renderImage(){
    return (<Animatable.Image animation="fadeIn" style={[styles.img, {opacity:this.props.alpha}]} 
          originalWidth={this.props.photo.width} originalHeight={this.props.photo.height}
          source={{uri:this.props.photo.uri||this.props.photo.get('uri')}} />);
  },
///
	render() {
    //console.log('Edit Canvas view::alpha', this.props.alpha);
    //console.log('Edit Canvas view::photo', this.props.photo);
    //<Image style={[styles.img, {opacity:this.props.alpha}]} source={this.props.photo} />
    return (<View style={styles.main}>
        {this.props.imageLocalIsLoading? <ActivityIndicator style={styles.centering}
          color="white"
          size="large" /> : <this._renderImage/>}
    	</View> 
    )}

});
///
const styles = StyleSheet.create({
  main: {
    backgroundColor:0x808080ff,
    flex: 1,
    alignItems:'stretch',
  },
  img:{
    flex:1,
    resizeMode:'contain',
  },
  centering: {
    backgroundColor: '#cccccc',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
});

export default EditCanvasView;