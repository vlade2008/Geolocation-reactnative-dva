export default {
  namespace: 'app',
  state: {
    loading: false,
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload }
    },
  },
  effects: {


  },
  subscriptions: {
    setup({ dispatch }) {
      dispatch({ type: 'loadStorage' })
    },
  },
}
