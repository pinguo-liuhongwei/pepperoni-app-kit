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
let THUMB_URLS = [{a:1},{a:1},{a:1},{a:1},{a:1},{a:1},{a:1},{a:1},{a:1},{a:1}];
  /* eslint no-bitwise: 0 */
const hashCode = function(str) {
  var hash = 15;
  for (var ii = str.length - 1; ii >= 0; ii--) {
    hash = ((hash << 5) - hash) + str.charCodeAt(ii);
  }
  return hash;
};
const EditFilterBarView = React.createClass({

  getInitialState() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {dataSource:ds.cloneWithRows([1,2,3,4,5])};
  },

  _renderRow(rowData: string, sectionID: number, rowID: number, highlightRow: (sectionID: number, rowID: number) => void) {
    return (
      <TouchableOpacity onPress={() => {
          this._pressRow(rowID);
          highlightRow(sectionID, rowID);
        }}>
          <View style={styles.filterElem}>
            <Image style={styles.filterThumb} source={require('../../imgs/page-edit/circle-_moren@2x.png')}/>
            <Text style={styles.filterTitle}>Filter</Text>
          </View>
      </TouchableOpacity>);
  },

  _pressRow(rowID: number) {
    console.log("EditFilterBarView::_pressRow",rowID);
    //this._pressData[rowID] = !this._pressData[rowID];
  },

	render() {
    console.dir(this.state.dataSource);
    return (<View style={styles.main}>
        <ListView style={styles.canvas} horizontal={true}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow}
          renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
        />
  </View>)}
});


const styles = StyleSheet.create({
  main: {
    
    flex: 0,
    flexDirection:'column',
    alignItems:'stretch',
    height:pxToDp(380),
    paddingTop:pxToDp(84),
    paddingBottom:pxToDp(56),
  },
  canvas:{
    backgroundColor:0xff000000,
    height:pxToDp(260),
    flex:1,
  },
  filterElem:{
    backgroundColor:0xffff0000,
    flexDirection:'column',
    height:pxToDp(260),
    width:pxToDp(23*2+164),
    alignItems:'center',
    justifyContent:'space-between',
    paddingBottom:pxToDp(30),
  },
  filterThumb:{
    height:pxToDp(164),
    width:pxToDp(164),
    resizeMode:'cover',
  },
  flterTitle:{
    flex:0,
  },
});
export default EditFilterBarView;