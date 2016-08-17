import pxToDp from '../../utils/pxToDp';
import React, {PropTypes} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View
} from 'react-native';

const EditFilterBarView = React.createClass({
	render() {

    return (<View style={styles.main}>
      
      <View style={styles.canvas}>

      <TouchableOpacity>
        <Image source={require('../../imgs/page-edit/circle-_moren@2x.png')}/>
      </TouchableOpacity>
            <TouchableOpacity>
        <Image source={require('../../imgs/page-edit/circle-_moren@2x.png')}/>
      </TouchableOpacity>
            <TouchableOpacity>
        <Image source={require('../../imgs/page-edit/circle-_moren@2x.png')}/>
      </TouchableOpacity>
            <TouchableOpacity>
        <Image source={require('../../imgs/page-edit/circle-_moren@2x.png')}/>
      </TouchableOpacity>
            <TouchableOpacity>
        <Image source={require('../../imgs/page-edit/circle-_moren@2x.png')}/>
      </TouchableOpacity>

        <Text>EditFilterBarView</Text>
      </View>
        

  </View>)}
});


const styles = StyleSheet.create({
  main: {
    
    flex: 0,
    flexDirection:'column',
    alignItems:'stretch',
    height:pxToDp(380),
    paddingTop:pxToDp(84),
    paddingBottom:pxToDp(96),
  },
  canvas:{
    paddingLeft:pxToDp(84),
    paddingRight:pxToDp(96),
    flexDirection:'row',
    backgroundColor:0xffff0010,
    flex:1,
  },
});
export default EditFilterBarView;