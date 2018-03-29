import React, { PureComponent } from 'react'
import {Platform} from 'react-native'
import { connect } from 'react-redux'

import { StackNavigator,addNavigationHelpers,TabNavigator,TabBarBottom } from 'react-navigation'

import {
  initializeListeners,
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers'


//container
import Loading from './container/Loading'

//import testing
import Main from './components/Main'
import Testing from './components/Testing'



//import route
import About from './routes/About'
import ListMap from './routes/ListMap'
import MapPage from './routes/MapPage'




export const routerMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.router
)

const addListener = createReduxBoundAddListener('root')


const AppTabNavigator = TabNavigator(
  {
    About:{screen:About},
    MapPage:{screen:MapPage},
    ListMap:{screen:ListMap}

  },
  {
    initialRouteName:'ListMap',
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    animationEnabled: true,
    lazyLoad: true,
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? '#2196F3' : '#fff',
    },
  }
)

const AppNavigator = StackNavigator(
  {
    Main:Main,
    Testing:Testing,
    Home:AppTabNavigator,
  },
  {
    initialRouteName:'Home',
    headerMode: 'float'
  }
)

@connect(({ app, router }) => ({ app, router }))
class Router extends PureComponent {

  componentDidMount() {
    initializeListeners('root', this.props.router)
  }


  render() {

    const { dispatch, app, router } = this.props

    const navigation = addNavigationHelpers({
      dispatch,
      state: router,
      addListener,
    })
    //
    // console.log(app,'iyang app state');
    if (app.loading) return <Loading />

    return <AppNavigator navigation={navigation} />
  }
}

export function routerReducer(state, action = {}) {
  return AppNavigator.router.getStateForAction(action, state)
}



export default Router;
