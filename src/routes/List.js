import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation'
import { Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { Ionicons } from '@expo/vector-icons';
import {computeSize} from '../utils/DeviceRatio'


@connect()
class List extends Component {
  static navigationOptions = {
    title: 'List',
    tabBarLabel: 'List',
    tabBarIcon:(icn)=>{
      return(
        <Ionicons name="md-list" size={computeSize(60)}  color={icn.tintColor} />
      )
    }
  }
  render() {
    return (
      <View style={{flex:1,backgroudColor:'red'}}>
        <Text style={{alignItem:'center'}}>List</Text>
      </View>
    );
  }
}

export default List
