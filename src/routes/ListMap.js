import React, { Component } from 'react';
import { Text, View,ScrollView,FlatList } from 'react-native';
import { NavigationActions } from 'react-navigation'
import { List,WingBlank,WhiteSpace,SearchBar,Flex } from 'antd-mobile'
import { connect } from 'react-redux'
import { Ionicons ,MaterialIcons,MaterialCommunityIcons} from '@expo/vector-icons';
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
      return(

        <View style={{flex:1,marginTop:computeSize(10)}}>
          <WingBlank>
            <Item style={{borderRadius:computeSize(10)}}>
                <Flex>
                  <Flex.Item>
                    <Text style={{fontSize:computeSize()}}>{item.name}</Text>
                  </Flex.Item>
                  <Flex.Item>
                    <Flex  >
                      <Flex.Item></Flex.Item>
                      <Flex.Item >
                        <Text style={{fontSize:computeSize(25)}}>{item.description}</Text>
                        <WhiteSpace/>
                        <Text style={{fontSize:computeSize(25)}}>{item.address}</Text>
                      </Flex.Item>
                      <Flex.Item style={{flex:0.5}}>
                        {item.iconRender}
                      </Flex.Item>
                    </Flex>
                  </Flex.Item>
                </Flex>
            </Item>
          </WingBlank>
        </View>
      )
  }

  _keyExtractor = (item, index) => item.id;


  render() {

    let data = [
      {
        id:'1',
        name:'Bohol Avenue',
        price:'12,000',
        description:'Restaurant',
        address:'Philipines',
        iconRender:(<MaterialIcons name={"restaurant"} size={computeSize(60)}  color={'red'} />)
      },
      {
        id:'2',
        name:'Dauis Resort',
        price:'50,000',
        description:'Coffee',
        address:'Malaysia',
        iconRender:(<MaterialCommunityIcons name={"coffee"} size={computeSize(60)}  color={'green'}/>)
      }
    ]



    return (
      <View style={{flex:1}}>
        <SearchBar placeholder="Search" maxLength={8} />

        <FlatList
          data={data}
          keyExtractor={this._keyExtractor}
          renderItem={({ item }) => this._renderItem(item)}
         />

      </View>

    );
  }
}

export default ListMap
