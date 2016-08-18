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

  propTypes: {
    goBack: PropTypes.func.isRequired,
    goNext: PropTypes.func.isRequired,
  },

  goBack() {
  	console.log('EditHeaderView', 'goBack');
    this.props.goBack();
  },
  goNext() {
  	console.log('EditHeaderView', 'goNext');
    this.props.goNext();
  },
  gotoResult() {
    this.props.switchTab(this.props.tabs.getIn('routes',1));
  },

  render() {

    return (<View style={styles.main}>
		<TouchableOpacity style={styles.leftBtn} onPress={this.goBack}>
		   	<Image source={require('../../imgs/page-edit/fanhui-@2x.png')}/>
		</TouchableOpacity>
        <Text style={styles.title} >EditHeaderView</Text>
        <TouchableOpacity style={styles.rightBtn} onPress={this.goNext}>
		   	<Image source={require('../../imgs/page-edit/jinru@2x.png')}/>
		</TouchableOpacity>
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