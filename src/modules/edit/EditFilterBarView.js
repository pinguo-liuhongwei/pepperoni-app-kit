import pxToDp from '../../utils/pxToDp';
import * as Animatable from 'react-native-animatable';
import * as EditFilterBarState from './EditFilterBarState';
import EditFilterListItemView from './EditFilterListItemView';
import PTRView from 'react-native-pull-to-refresh';

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
    dispatch: PropTypes.func.isRequired,
    filters:PropTypes.array.isRequired,
    filterIsLoading:PropTypes.bool.isRequired,
    filterIsLoaded:PropTypes.bool.isRequired,
  },
  getInitialState() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {dataSource:ds.cloneWithRows([])};
  },
  componentDidMount(){
    this.reloadFilters();
  },

  reloadFilters(){
    this.props.dispatch(EditFilterBarState.requestFilters()).catch(e=>console.log(e));
  },
  _pressRow(rowData: object,rowID: number) {
    console.log("EditFilterBarView::_pressRow",rowID,rowData);
    this.props.dispatch(EditFilterBarState.filterSelected(rowID));
  },

  _renderRow(rowData: object, sectionID: number, rowID: string, highlightRow: (sectionID: number, rowID: number) => void) {
    return (
      <EditFilterListItemView filterData={rowData} rowID={rowID} onPress={() => this._pressRow(rowData,rowID)}></EditFilterListItemView>)
  },
//////


  _renderList(){
    return (<ListView style={styles.canvas} horizontal={true}
          renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
          dataSource={this.state.dataSource.cloneWithRows(this.props.filters)}
          renderRow={this._renderRow} >
          </ListView>)
  },

  _renderLoadingIndicator(){
    return this.props.filterIsLoading?(
      <Animatable.Text animation="fadeIn">Loading filters ...</Animatable.Text>):(
      <TouchableOpacity onPress={this.reloadFilters}>
        <Animatable.Text animation="fadeIn">Loading filters failed, Click to reload</Animatable.Text>
      </TouchableOpacity>
      )
  },
////
	render() {
    return (<View style={styles.main}>
        {!this.props.filterIsLoaded?<this._renderLoadingIndicator />:<this._renderList />}
  </View>)}
});
////

const styles = StyleSheet.create({
  main: {
    
    flex: 0,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center', 
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