import pxToDp from '../../utils/pxToDp';
import React, {PropTypes} from 'react';
import {
  StyleSheet,
  Slider,
  Text,
  View
} from 'react-native';

const EditSliderBarView = React.createClass({
  propTypes:{
    alpha:PropTypes.number.isRequired,
    alphaChanged:PropTypes.func.isRequired,
  },
  onValueChange(value:number):void{
    //console.log('EditSliderBarView::onValueChange',value);
    this.props.alphaChanged(value);
  },
	render() {

    return (<View style={styles.main}>
        <Text>0</Text>
        <Slider style={styles.slider} value={1}
          thumbImage={require('../../imgs/page-edit/intensity_yuan@2x.png')}
          trackImage={require('../../imgs/page-edit/intensity_hui@2x.png')}
          maximumTrackImage={require('../../imgs/page-edit/intensity_hui@2x.png')}
          minimumTrackImage={require('../../imgs/page-edit/intensity_hei@2x.png')}
          onValueChange={this.onValueChange} />
    	  <Text>100</Text>
      </View>
    )}
});

const styles = StyleSheet.create({
  main: {
    backgroundColor:0x00ff0000,
    flex: 0,
    flexDirection:'row',
    paddingHorizontal:pxToDp(30),
    paddingBottom:pxToDp(30),
    alignItems:'center',
    justifyContent:'center',
    height:pxToDp(100),
  },
  slider:{
    flex:1,
    marginHorizontal:pxToDp(20),
  },
});

export default EditSliderBarView;