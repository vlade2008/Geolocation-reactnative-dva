import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation'
import { Button } from 'antd-mobile'
import { connect } from 'react-redux'



@connect()
class List extends Component {

  render() {
    return (
      <View style={{flex:1,backgroudColor:'red'}}>
        <Text style={{alignItem:'center'}}>List</Text>
      </View>
    );
  }
}

export default List
