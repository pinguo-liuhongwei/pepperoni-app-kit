import pxToDp from '../../utils/pxToDp';
import React, {PropTypes} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ListView,
  RecyclerViewBackedScrollView,
  Image,
  Text,
  View
} from 'react-native';



const EditFilterListItemView = React.createClass({
  propTypes:{
    filterData:PropTypes.object.isRequired,
    rowID:PropTypes.string.isRequired
  },

  getInitialState() {
    return {};
  },

  _renderSelected(){
  	return <Image style={styles.filterThumb} source={require('../../imgs/page-edit/circle_xuanzhong@2x.png')} />;
  },

  _renderLock(){
  	return (
  		<View style={styles.filterThumbBg}>
  			<Image style={styles.imgLock} source={require('../../imgs/page-edit/lock-@2x.png')}/>
  		</View>
  	);
  },

  _renderLockSelected(){
  	return (
  		<View style={styles.filterThumbBg}>
	  		<Image style={[styles.filterThumb, styles.lockSelected]} source={require('../../imgs/page-edit/circle_xuanze@2x.png')}>
	  			<Text style={styles.price}>$0.99</Text>
	  			<Text style={styles.buyTitle}>购买</Text>
	  		</Image>
  		</View>
  	);
  },

  _renderCore(){
  	let selected=false;
  	if(this.props.filterData.isLock){
  		return selected? <this._renderLockSelected /> : <this._renderLock />;
  	}else{
  		return selected? <this._renderSelected /> : <View />;
  	}
  	
  },

  render() {
    return (
      <TouchableOpacity>
          <View style={styles.filterElem}>
            <Image style={styles.filterThumb} source={require('../../imgs/page-edit/circle-_moren@2x.png')}>
              <Image style={styles.filterThumb} source={{uri: this.props.filterData.image}}>
              	<this._renderCore />
              </Image>
            </Image>
            <Text style={styles.filterTitle}>{this.props.filterData.title}</Text>
          </View>
      </TouchableOpacity>);
  },
});


const styles = StyleSheet.create({


  filterElem:{
    backgroundColor:0xffff0000,
    flexDirection:'column',
    height:pxToDp(260),
    width:pxToDp(23*2+164),
    alignItems:'center',
    justifyContent:'space-between',
    paddingBottom:pxToDp(30),
  },
  filterThumbBg:{
    height:pxToDp(164),
    width:pxToDp(164),
    backgroundColor: 0x00000080,
    flexDirection:'column',
    alignItems:'stretch',
    borderRadius:pxToDp(164/2),
    alignItems:'center',
    justifyContent:'center',

  },
  filterThumb:{
    height:pxToDp(164),
    width:pxToDp(164),
    resizeMode:'cover',
    flexDirection:'column',
    alignItems:'stretch',
    borderRadius:pxToDp(164/2),
    alignItems:'center',
    justifyContent:'center',

  },
  filterTitle:{
    flex:0,
  },
  lockSelected:{

  },
  price:{
  	flex:1,
  	color:0xfc807eff,
  	fontSize:18,
  	paddingTop:pxToDp(62),
  },
  buyTitle:{
  	flex:0,
  	color:0xffffffff,
  	fontSize:12,
  	paddingBottom:pxToDp(10),
  },
});
export default EditFilterListItemView;