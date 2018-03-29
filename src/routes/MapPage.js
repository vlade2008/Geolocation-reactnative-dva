import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation'
import { Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {computeSize} from '../utils/DeviceRatio'

@connect()
class MapPage extends Component {
  static navigationOptions = {
    title: 'Map',
    tabBarLabel: 'Map',
    tabBarIcon:(icn)=>{
      return(
        <MaterialCommunityIcons name="map" size={computeSize(60)}  color={icn.tintColor} />
      )
    }
  }
  render() {
    console.log('meng load ko');
    return (
      <View style={{flex:1,backgroudColor:'black'}}>
        <Text style={{alignItem:'center'}}>MapPage</Text>
      </View>
    );
  }
}

export default MapPage
