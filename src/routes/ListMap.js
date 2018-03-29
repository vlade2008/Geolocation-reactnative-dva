import React, { Component } from 'react';
import { Text, View,ScrollView,FlatList } from 'react-native';
import { NavigationActions } from 'react-navigation'
import { List,WingBlank,WhiteSpace,SearchBar } from 'antd-mobile'
import { connect } from 'react-redux'
import { Ionicons } from '@expo/vector-icons';
import {computeSize} from '../utils/DeviceRatio'


const Item = List.Item;
const Brief = Item.Brief;


@connect()
class ListMap extends Component {

  static navigationOptions = {
    title: 'List',
    tabBarLabel: 'List',
    tabBarIcon:(icn)=>{
      return(
        <Ionicons name="md-list" size={computeSize(60)}  color={icn.tintColor} />
      )
    }
  }



  _renderItem = (item) =>{
    return ()=>{


      return(
        <View>

        </View>
      )

    }
  }


  render() {

    let data = [
      {
        id:'1',
        name:'Bohol Avenue',
        price:'12,000',
        description:'Restaurant',
        address:'Philipines'
      },
      {
        id:'2',
        name:'Dauis Resort',
        price:'50,000',
        description:'Coffee Shop',
        address:'Malaysia'
      }
    ]



    return (
      <View style={{flex:1}}>
        <SearchBar placeholder="Search" maxLength={8} />

        {/* <FlatList
          data={data}
          renderitem={this._renderItem}
         /> */}

      </View>

    );
  }
}

export default ListMap
