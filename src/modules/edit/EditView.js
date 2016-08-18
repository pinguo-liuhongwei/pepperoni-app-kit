import * as NavigationState from '../../modules/navigation/NavigationState';
import pxToDp from '../../utils/pxToDp';
import EditCanvasView from './EditCanvasView';
import EditSliderBarView from './EditSliderBarView';
import EditHeaderView from './EditHeaderView';
import EditFilterBarView from './EditFilterBarView';
import React, {
  PropTypes
} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View
} from 'react-native';

const EditView = React.createClass({
  propTypes: {
    switchTab: PropTypes.func.isRequired
  },
  getInitialState() {
    return {
      alpha: 1,
      filters: [],
    };
  },
  componentWillMount() {
    fetch("http://115.231.182.11/api/art/style", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: "appName=poker&appVersion=1.1&appVersionCode=3&appname=poker&appversion=1.1&channel=AppStore&device=iPhone6%2C2&deviceId=8355BA83-36AE-4492-9AA1-CA9945C1BC79&fromChannel=ios&geoinfo=0.000000%2C0.000000&initStamp=1471516928.000000&latitude=0&locale=zh-Hans&longitude=0&mcc=460&mnc=01&platform=ios&sig=c18270d9c15f9a6b0ca4281008854af3&systemVersion=9.3.4&timeZone=Asia/Shanghai"
    }).then((res) => {
      if (res.ok) {
        //console.dir(res);
        res.json().then((data) => {
          console.log('/api/art/style',data);
          if(data.status==200){
            this.setState({filters:data.data.list});
          }else{
            alert("Oops! "+data.message);
          }
        });
      } else if (res.status == 401) {
        alert("Oops! You are not authorized.");
      }
    }, (e) => {
      alert("Error submitting form!");
    });
  },
  gotoCamera() {
    console.log('EditView', 'gotoCamera');
  },
  gotoAlbum() {
    console.log('EditView', 'gotoAlbum', this.props.tabs.getIn('routes', 0));
    this.props.switchTab(0);
  },

  alphaChanged(value) {
    this.setState({
      alpha: value
    });
  },

  render() {
    return (<View style={styles.main}>
        <EditHeaderView style={styles.header} goBack={this.gotoAlbum} goNext={this.gotoAlbum} />
        <EditCanvasView style={styles.canvas} photo={this.props.photo}  alpha={this.state.alpha} ></EditCanvasView>
        <EditFilterBarView style={styles.filterBar} filters={this.state.filters} />
        <EditSliderBarView style={styles.sliderBar} alpha={this.state.alpha} alphaChanged={this.alphaChanged} />
      </View>)
  }
});


const styles = StyleSheet.create({
  main: {
    backgroundColor: 0xff000000,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
  },
});

export default EditView;