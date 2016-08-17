import * as HomeState from './HomeState';
import * as NavigationState from '../../modules/navigation/NavigationState';
import pxToDp from '../../utils/pxToDp';
import React, {PropTypes} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View
} from 'react-native';


const HomeView = React.createClass({
  propTypes: {
    switchTab: PropTypes.func.isRequired,
  },
  gotoCamera() {
    console.log('gotoCamera');
    //this.props.switchTab(this.states.tabs);
  },
  gotoAlbum() {
    //console.log('gotoAlbum',this.props.tabs);
    this.props.switchTab(this.props.tabs.getIn('routes',1));
  },

  render() {
    const loadingStyle = this.props.loading
      ? {backgroundColor: '#eee'}
      : null;

    return (
        <Image style={styles.backgroundImage} source={require('../../imgs/page-home/750x1334.png')} >
          <View style={styles.adCompenent}>
            <Image style={styles.adCompenentBanner} source={require('../../imgs/page-home/banner-@2x.png')} />
            <Text style={styles.adCompenentText}>poker滤镜，你能想到的它都帮你实现</Text>
            <Image style={styles.adCompenentBtn} source={require('../../imgs/page-home/button-@2x.png')}>
              <Text style={styles.adCompenentBtnText}>点击体验</Text>
            </Image>
          </View>
          <View style={styles.middleCanvas}>
            <View style={styles.middlePicture} ></View>
            <View style={styles.controllBar} >
              <TouchableOpacity style={styles.controllBarBtn} onPress={this.gotoCamera}>
                <View>
                <Image style={styles.controllBarBtnImg} source={require('../../imgs/page-home/camera@2x.png')} />
                <Text style={styles.controllBarBtnText}>相机</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.controllBarSpacer}></View>
              <TouchableOpacity style={styles.controllBarBtn} onPress={this.gotoAlbum}>
                <View>
                <Image style={styles.controllBarBtnImg} source={require('../../imgs/page-home/libary@2x.png')} />
                <Text style={styles.controllBarBtnText}>相册</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.bottomBar} >
              <Text style={styles.adCompenentText}>实现</Text>
              <Text style={styles.adCompenentText}>实现</Text>
              <Text style={styles.adCompenentText}>实现</Text>
            </View>
          </View>
        </Image>
      );    
  }
});


const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    flexDirection:'column',
    //alignSelf: 'stretch',
    width: null,
    height:null,
    resizeMode:'stretch'
  },
  adCompenent:{
    flex:0,
    flexDirection:'column',
    alignItems:'center',
    paddingTop:pxToDp(36),
    paddingBottom:pxToDp(36),
    height:pxToDp(474),
  },
  adCompenentBanner:{
    width:pxToDp(518),
    height:pxToDp(260),
    borderRadius:5,
    resizeMode:'contain',
    overflow:'hidden'
  },
  adCompenentText:{
    backgroundColor:0x00000000,
    marginTop:pxToDp(30),
    marginBottom:pxToDp(30)
  },
  adCompenentBtn:{
    alignItems:'center',
    justifyContent:'center',
    width:pxToDp(238),
    height:pxToDp(60)
  },
  adCompenentBtnText:{
    backgroundColor:0x00000000,
  },
  middleCanvas:{
    flex:1,
    backgroundColor:0xff000000,
    flexDirection:'column',
  },
  middlePicture:{
    flex:0,
    height:pxToDp(390),
    backgroundColor:0xff000030,
  },
  controllBar:{
    flex:2,
    paddingTop:pxToDp(158),
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'flex-start'
  },
  controllBarSpacer:{
    width:100,
  },
  controllBarBtn:{
    backgroundColor:0xffff0020,
    flexDirection:'column',
    alignItems:'center'
  },
  controllBarBtnImg:{
    width:pxToDp(72),
    height:pxToDp(60)
  },
  controllBarBtnText:{
    backgroundColor:'transparent',
    paddingTop:10,
    fontSize:16
  },
  bottomBar:{
    backgroundColor:0xffff0080,
    flex:0,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    height:pxToDp(120)
  },




});

export default HomeView;
