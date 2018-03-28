import {
  initializeListeners,
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers'

export const routerMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.router
)
