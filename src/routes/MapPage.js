import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation'
import { Button } from 'antd-mobile'
import { connect } from 'react-redux'



@connect()
class MapPage extends Component {

  render() {
    return (
      <View style={{flex:1,backgroudColor:'black'}}>
        <Text style={{alignItem:'center'}}>MapPage</Text>
      </View>
    );
  }
}

export default MapPage
