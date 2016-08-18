import pxToDp from '../../utils/pxToDp';
import React, {PropTypes} from 'react';
import {
  StyleSheet,
  Slider,
  Text,
  View
} from 'react-native';

const EditSliderBarView = React.createClass({
  onValueChange(value){
    console.log('EditSliderBarView::onValueChange',value);
  },
	render() {

    return (<View style={styles.main}>
        <Text>0</Text>
        <Slider style={styles.slider} step={1} minimumValue={0} maximumValue={100} onValueChange={this.onValueChange} />
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