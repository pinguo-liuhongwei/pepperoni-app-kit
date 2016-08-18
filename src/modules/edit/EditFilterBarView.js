import pxToDp from '../../utils/pxToDp';
import EditFilterListItemView from './EditFilterListItemView';
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

const EditFilterBarView = React.createClass({
  propTypes:{
    filters:PropTypes.array.isRequired,
  },
  getInitialState() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {dataSource:ds.cloneWithRows([])};
  },

  _renderRow(rowData: object, sectionID: number, rowID: string, highlightRow: (sectionID: number, rowID: number) => void) {
    return (
      <EditFilterListItemView filterData={rowData} rowID={rowID}
       onPress={() => {this._pressRow(rowID); highlightRow(sectionID, rowID);}} />)
  },

  _pressRow(rowID: number) {
    console.log("EditFilterBarView::_pressRow",rowID);
    //this._pressData[rowID] = !this._pressData[rowID];
  },

	render() {
    return (<View style={styles.main}>
        <ListView style={styles.canvas} horizontal={true}
          dataSource={this.state.dataSource.cloneWithRows(this.props.filters)}
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
});
export default EditFilterBarView;