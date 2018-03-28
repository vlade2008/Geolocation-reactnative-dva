import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation'
import { Button } from 'antd-mobile'
import { connect } from 'react-redux'



@connect()
class About extends Component {

  render() {
    return (
      <View style={{flex:1,backgroudColor:'pink'}}>
        <Text style={{alignItem:'center'}}>About</Text>
      </View>
    );
  }
}

export default About
