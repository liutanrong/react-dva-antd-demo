
import {routerRedux} from 'dva/router'
export default {

  namespace: 'example',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    // 路由跳转
    * redirect ({ payload }, { put }) {
      debugger
      yield put(routerRedux.push('/products', {name: 'dkvirus'}));
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
