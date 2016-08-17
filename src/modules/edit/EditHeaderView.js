import pxToDp from '../../utils/pxToDp';
import React, {PropTypes} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View
} from 'react-native';

const EditHeaderView = React.createClass({
	render() {

    return (<View style={styles.main}>

    	 <Image style={styles.leftBtn} source={require('../../imgs/page-edit/fanhui-@2x.png')}/>
        <Text style={styles.title} >EditHeaderView</Text>
         <Image style={styles.rightBtn} source={require('../../imgs/page-edit/jinru@2x.png')}/>
    	</View>
    )}
});

const styles = StyleSheet.create({
  main: {
    backgroundColor:0xffffffff,
    flex: 0,
    flexDirection:'row',
    alignItems:'center',
    height:pxToDp(88),
  },
  leftBtn:{
  	flex:0,
  	marginLeft:pxToDp(15),
  },
  rightBtn:{
  	flex:0,
  	marginRight:pxToDp(15),
  },
  title:{
  	flex:1,
    justifyContent:'center',
    textAlign:'center',
  }
});

export default EditHeaderView;