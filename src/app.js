import React from 'react'
import { AppRegistry } from 'react-native'
import { LocaleProvider } from 'antd-mobile'
import enUS from 'antd-mobile/lib/locale-provider/en_US'

import dva from './utils/dva'
import Router, { routerMiddleware } from './router'



import routerModel from './model/router'
import appModel from './model/app'

const app = dva({
  initialState: {},
  models: [routerModel,appModel],
  onAction: [routerMiddleware],
  onError(e) {
    console.log('onerror', e)
  },
})

export default App = app.start(
  <LocaleProvider locale={enUS}>
    <Router />
  </LocaleProvider>
)
