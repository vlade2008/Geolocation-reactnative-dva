import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation'
import { Button } from 'antd-mobile'
import { connect } from 'react-redux'



@connect()
class Main extends Component {


  onRouteChange = () =>{
    console.log(this.props,'mao ne iya props');
    this.props.dispatch(NavigationActions.navigate({routeName:'Testing'}))
  }

  render() {
    return (
      <View>
        <Button onClick={this.onRouteChange}>Testing</Button>
      </View>
    );
  }
}

export default Main
