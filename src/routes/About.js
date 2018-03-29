import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation'
import { Button,Icon } from 'antd-mobile'
import { connect } from 'react-redux'
import { MaterialIcons } from '@expo/vector-icons';
import {computeSize} from '../utils/DeviceRatio'

@connect()
class About extends Component {

  static navigationOptions = {
    title: 'About',
    tabBarLabel: 'About',
    tabBarIcon:(icn)=>{
      return(
        <MaterialIcons name="info" size={computeSize(60)} color={icn.tintColor}    />
      )
    }
  }



  render() {
    return (
      <View style={{flex:1,backgroudColor:'pink'}}>
        <Text style={{alignItem:'center'}}>About</Text>

      </View>
    );
  }
}

export default About
